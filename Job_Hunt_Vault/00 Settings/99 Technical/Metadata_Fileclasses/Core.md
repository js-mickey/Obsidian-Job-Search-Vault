---
fields:
  - name: Company
    type: Input
    options: {}
    path: ""
    id: PL0huJ
  - name: Source
    type: Select
    options:
      sourceType: ValuesListNotePath
      valuesList: {}
      valuesListNotePath: 00 Settings/10 Lists/Sources.md
    path: ""
    id: RuZaw2
    command:
      id: insert__RuZaw2
      icon: list-plus
      label: Insert Source field
  - name: Notes
    type: Input
    options: {}
    path: ""
    id: A9lfXV
  - name: Created_Date
    type: Formula
    options:
      autoUpdate: true
      formula: current.file.ctime
    path: ""
    id: 2RQAUE
  - name: URL
    type: Input
    options: {}
    path: ""
    id: MEOdLj
version: "2.17"
limit: 20
mapWithTag: false
icon: circle
tagNames:
filesPaths:
bookmarksGroups:
excludes:
extends:
savedViews: []
favoriteView:
fieldsOrder:
  - MEOdLj
  - PL0huJ
  - RuZaw2
  - A9lfXV
  - 2RQAUE
---
