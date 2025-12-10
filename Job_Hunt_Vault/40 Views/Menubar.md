---
cssclasses: menubar
---

# Menu
`button-n-dashboard`

#### Create New
`button-n-pos`
`button-n-comm`
`button-n-comp`
`button-n-cont`
`button-n-journal`
#### See All
`button-positions`
`button-comms`
`button-companies`
`button-contacts`
`button-journals`
#### Recent Pages
`$=dv.list(dv.pages("").sort(f=>f.file.mtime.ts,"desc").limit(5).file.link)`
