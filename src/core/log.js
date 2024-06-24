import axios from 'axios';
import config from '../config.json';
import { isObjectEmpty, showNotification } from '../lib/util';
import { trackSyncCallLog, trackSyncMessageLog } from '../lib/analytics';
import pipedriveModule from '../platformModules/pipedrive.js';
import insightlyModule from '../platformModules/insightly.js';
import clioModule from '../platformModules/clio.js';
import redtailModule from '../platformModules/redtail';
import bullhornModule from '../platformModules/bullhorn';

// Input {id} = sessionId from RC
async function addLog({ logType, logInfo, isMain, note, additionalSubmission, overridingContactId, contactType, contactName }) {
    const { rcUnifiedCrmExtJwt } = await chrome.storage.local.get('rcUnifiedCrmExtJwt');
    const { overridingPhoneNumberFormat } = await chrome.storage.local.get({ overridingPhoneNumberFormat: '' });
    const rcUserInfo = await chrome.storage.local.get('rcUserInfo');
    if (!!rcUnifiedCrmExtJwt) {
        switch (logType) {
            case 'Call':
                const addCallLogRes = await axios.post(`${config.serverUrl}/callLog?jwtToken=${rcUnifiedCrmExtJwt}`, { contactId: overridingContactId, logInfo, note, additionalSubmission, overridingFormat: overridingPhoneNumberFormat, overridingContactId, contactType, contactName });
                // force call log matcher check
                document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
                    type: 'rc-adapter-trigger-call-logger-match',
                    sessionIds: [logInfo.sessionId]
                }, '*');
                if (addCallLogRes.data.successful) {
                    showNotification({ level: 'success', message: 'call log added', ttl: 3000 });
                    trackSyncCallLog({ hasNote: note !== '' });
                    // check for remaining recording link
                    const recordingSessionId = `rec-link-${logInfo.sessionId}`;
                    const existingCallRecording = await chrome.storage.local.get(recordingSessionId);
                    if (!!existingCallRecording[recordingSessionId]) {
                        await updateLog({ logType: 'Call', sessionId: logInfo.sessionId, recordingLink: existingCallRecording[recordingSessionId].recordingLink })
                    }
                }
                else {
                    showNotification({ level: 'warning', message: addCallLogRes.data.message, ttl: 3000 });
                }
                break;
            case 'Message':
                const messageLogRes = await axios.post(`${config.serverUrl}/messageLog?jwtToken=${rcUnifiedCrmExtJwt}`, { contactId: overridingContactId, logInfo, additionalSubmission, overridingFormat: overridingPhoneNumberFormat, overridingContactId, contactType, contactName });
                if (messageLogRes.data.successful) {
                    if (isMain) {
                        showNotification({ level: 'success', message: 'message log added', ttl: 3000 });
                        trackSyncMessageLog();
                    }
                }
                break;
        }
    }
    else {
        showNotification({ level: 'warning', message: 'Please go to Settings and authorize CRM platform', ttl: 3000 });
    }
}

async function checkLog({ logType, sessionIds }) {
    const { rcUnifiedCrmExtJwt } = await chrome.storage.local.get('rcUnifiedCrmExtJwt');
    if (!!rcUnifiedCrmExtJwt) {
        switch (logType) {
            case 'Call':
                const callLogRes = await axios.get(`${config.serverUrl}/callLog?jwtToken=${rcUnifiedCrmExtJwt}&sessionIds=${sessionIds}`);
                return { successful: callLogRes.data.successful, callLogs: callLogRes.data.logs };
        }
    }
    else {
        return { successful: false, message: 'Please go to Settings and authorize CRM platform' };
    }
}

function openLog({ platform, hostname, logId, contactType }) {
    const platformModule = getModule({ platform });
    platformModule.openLogPage({ hostname, logId, contactType });
}

async function updateLog({ logType, sessionId, recordingLink }) {
    const { rcUnifiedCrmExtJwt } = await chrome.storage.local.get('rcUnifiedCrmExtJwt');
    if (!!rcUnifiedCrmExtJwt) {
        switch (logType) {
            case 'Call':
                const patchBody = {
                    sessionId,
                    recordingLink
                }
                const callLogRes = await axios.patch(`${config.serverUrl}/callLog?jwtToken=${rcUnifiedCrmExtJwt}`, patchBody);
                if (callLogRes.data.successful) {
                    const recordingSessionId = `rec-link-${sessionId}`;
                    const existingCallRecording = await chrome.storage.local.get(recordingSessionId);
                    if (!!existingCallRecording[recordingSessionId]) {
                        await chrome.storage.local.remove(recordingSessionId);
                    }
                    console.log('call recording update done');
                }
        }
    }
}

async function cacheCallNote({ sessionId, note }) {
    let noteToCache = {};
    noteToCache[sessionId] = note;
    await chrome.storage.local.set(noteToCache);
}

async function getCachedNote({ sessionId }) {
    const cachedNote = await chrome.storage.local.get(sessionId);
    if (isObjectEmpty(cachedNote)) {
        return '';
    }
    else {
        return cachedNote[sessionId];
    }
}
function getModule({ platform }) {
    switch (platform) {
        case 'pipedrive':
            return pipedriveModule;
        case 'insightly':
            return insightlyModule;
        case 'clio':
            return clioModule;
        case 'redtail':
            return redtailModule;
        case 'bullhorn':
            return bullhornModule;
    }
}

exports.addLog = addLog;
exports.checkLog = checkLog;
exports.openLog = openLog;
exports.updateLog = updateLog;
exports.cacheCallNote = cacheCallNote;
exports.getCachedNote = getCachedNote;