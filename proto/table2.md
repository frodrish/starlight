---
title: Table
---

import fs from 'fs';
import { parse } from 'yaml';
import path from 'path'
import { createGrid } from 'ag-grid-community';

<span class="font-medium text-sky-500">
    {path.resolve('./docs/test.yaml')}
</span>

export const yamlContent = parse(fs.readFileSync('./docs/test.yaml', 'utf8'));

<pre>
{JSON.stringify(yamlContent, null, 2)}
</pre>

<table class="sortable">
<tr>
<th>ID</th>
<th>Name</th>
</tr>
  {yamlContent.users.map(item => (
    <tr>
        <td>{item.id}</td>
        <td>{item.username}</td>
    </tr>
  ))}
</table>


{  
gridOptions = {
    // Row Data: The data to be displayed.
    rowData: yamlContent.users,
    // Column Definitions: Defines the columns to be displayed.
    columnDefs: [
        { field: "ID" },
        { field: "name"}
    ]
}
}


export const myGridElement = document.querySelector('#myGrid')

 <div id="myGrid" style="height: 500px"></div>