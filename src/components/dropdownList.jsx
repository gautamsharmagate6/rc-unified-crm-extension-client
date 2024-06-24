import {
    RcSelect,
    RcMenuItem,
    RcListItemText
} from '@ringcentral/juno';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Select = styled(RcSelect)`
.RcTextFieldInput-root .MuiSelect-root{
    font-size: 13px;
    padding: 3px;
}
`;

const Container = styled.div`
font-size: 0.8rem;
font-weight: 700;
font-family: Lato, Helvetica, Arial, sans-serif;
line-height: 16px;
color: #666666;
padding: 3px 0px;
width: 100%;
`;

export default ({ selectionItems, presetSelection, onSelected, label, notShowNone: notShowNoneAsOption = false }) => {
    const [selection, setSelection] = useState(presetSelection);

    function onChange(event) {
        setSelection(event.target.value);
        event.target.value === 'none' ? onSelected(null) : onSelected(event.target.value);
    }
    function getItems(items) {
        const hasSecondaryDisplay = items[0].secondaryDisplay != '';
        const itemElements = hasSecondaryDisplay ?
            items.map(i => { return <RcMenuItem key={i.value} value={i.value}><RcListItemText primary={i.display} secondary={i.secondaryDisplay} /></RcMenuItem > }) :
            items.map(i => { return <RcMenuItem key={i.value} value={i.value}>{i.display}</RcMenuItem > });
        if (!notShowNoneAsOption) {
            // Preset to first item, add additional item as none/null
            itemElements.push(<RcMenuItem key='none' value='none'>none</RcMenuItem >);
        }
        return itemElements;
    }

    useEffect(() => {
        setSelection(presetSelection);
    }, [presetSelection])

    return (
        <Container>
            <Select
                label={label}
                onChange={onChange}
                value={selection}
                fullWidth
            >
                {getItems(selectionItems)}
            </Select>
        </Container>
    );
}