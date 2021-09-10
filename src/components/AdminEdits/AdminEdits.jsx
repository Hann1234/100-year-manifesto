import React from 'react';
import AdminEdits_Text from '../AdminEdits_Text/AdminEdits_Text';
import AdminEdits_Video from '../AdminEdits_Video/AdminEdits_Video';
import AdminEdits_Array from '../AdminEdits_Array/AdminEdits_Array';

// list of page_ids and corresponding page_names
const page_names = {
    0: 'home',
    1: 'intro',
    2: 'mission_statement',
    3: 'mantras',
    4: 'core_values',
    5: 'for_good',
    6: 'life_goals',
    7: 'guiding_principles',
    8: 'next_steps',
    9: 'about'
}

function AdminEdits( {page_id, html_id, html_type = 'text', default_value, current_selection, max_selected, handleAddFunction, handleDeleteFunction}) {
    return (
        <>{
            html_type === 'text' ?
                <AdminEdits_Text page_names={page_names} page_id={page_id} html_id={html_id} default_value={default_value}/> :
            html_type === 'video' ?
                <AdminEdits_Video page_names={page_names} page_id={page_id} html_id={html_id} default_value={default_value}/> :
            html_type === 'array' ?
                <AdminEdits_Array page_names={page_names} page_id={page_id} html_id={html_id} default_value={default_value} current_selection={current_selection} max_selected={max_selected} handleAddFunction={handleAddFunction} handleDeleteFunction={handleDeleteFunction}/> :
            <></>
        }</>
    );
}

export default AdminEdits;