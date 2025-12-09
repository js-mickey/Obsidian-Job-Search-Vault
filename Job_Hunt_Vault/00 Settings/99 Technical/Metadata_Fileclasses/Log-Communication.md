---
limit: 20
mapWithTag: true
icon: message-circle
tagNames:
  - log-communication
filesPaths:
bookmarksGroups:
excludes:
  - Company
  - Source
  - Notes
  - URL
extends: Core
savedViews: []
favoriteView:
fieldsOrder:
  - 31qf8r
  - lQRivx
  - OY5BAq
  - zX2hfB
  - aoJZyk
version: "2.28"
fields:
  - name: Comm_Type
    type: Select
    options:
      sourceType: ValuesListNotePath
      valuesList: {}
      valuesListNotePath: 00 Settings/10 Lists/Log-Communication-Type.md
    path: ""
    id: OY5BAq
  - name: Topic
    type: Input
    options:
      template: "{{What was the communication about?}}"
    path: ""
    id: lQRivx
  - name: Contacts
    type: MultiFile
    options:
      dvQueryString: dv.pages('"30 Records/20 People"')
    path: ""
    id: 31qf8r
  - name: Comm_DateTime
    type: DateTime
    options:
      dateShiftInterval: 1 day
      dateFormat: YYYY-MM-DD HH:mm
      defaultInsertAsLink: false
      linkPath: ""
    path: ""
    id: aoJZyk
  - name: Contact_Method
    type: Select
    options:
      sourceType: ValuesListNotePath
      valuesList: {}
      valuesListNotePath: 00 Settings/10 Lists/Contact-Methods.md
    path: ""
    id: zX2hfB
---
