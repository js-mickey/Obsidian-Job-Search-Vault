---
limit: 20
mapWithTag: true
icon: target
tagNames:
  - position
filesPaths:
bookmarksGroups:
excludes:
extends:
savedViews: []
favoriteView:
fieldsOrder:
  - ciqpaK
  - 4ZuDYQ
  - F1SI5I
  - C0XWTI
  - TlJYyG
  - dAj6qZ
  - lEtbYO
  - lKawEv
  - U6aJHc
  - 4fqBhk
  - KvLIas
  - uru6Fo
  - 0oHToR
version: "2.55"
fields:
  - name: Applied-Date
    type: Date
    options:
      dateShiftInterval: 1 day
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: false
      linkPath: ""
    path: ""
    id: KvLIas
  - name: Follow-Up-Reminder-Date
    type: Date
    options:
      dateShiftInterval: 1 Week
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: false
      linkPath: ""
    path: ""
    id: uru6Fo
  - name: Expiration-Date
    type: Date
    options:
      dateShiftInterval: 1 week
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: false
      linkPath: ""
      nextShiftIntervalField: Follow-Up Time
    path: ""
    id: 0oHToR
  - name: Applied
    type: Boolean
    options: {}
    path: ""
    id: 4fqBhk
  - name: Work-Location
    type: Input
    options:
      template: "{{Physical job location}}"
    path: ""
    id: lKawEv
  - name: Location-Type
    type: Select
    options:
      sourceType: ValuesListNotePath
      valuesList: {}
      valuesListNotePath: 00 Settings/10 Lists/Locations.md
    path: ""
    id: U6aJHc
  - name: Salary-Range
    type: Input
    options:
      template: "{{Posted Salary Range e.g. 50-150}}"
    path: ""
    id: lEtbYO
  - name: Confidence-Rating
    type: Select
    options:
      sourceType: ValuesList
      valuesList:
        "1": "1"
        "2": "2"
        "3": "3"
        "4": "4"
        "5": "5"
      valuesListNotePath: ""
    path: ""
    id: dAj6qZ
  - name: Priority
    type: Select
    options:
      sourceType: ValuesListNotePath
      valuesList: {}
      valuesListNotePath: 00 Settings/10 Lists/Job-Priorities.md
    path: ""
    id: TlJYyG
  - name: Job-Title
    type: Input
    options:
      template: "{{Title of the Job}}"
    path: ""
    id: ciqpaK
  - name: Contacts
    type: MultiFile
    options:
      dvQueryString: dv.pages('#person')
    path: ""
    id: C0XWTI
  - name: Company
    type: File
    options:
      dvQueryString: dv.pages('#company')
    path: ""
    id: 4ZuDYQ
  - name: App-Stage
    type: Select
    options:
      sourceType: ValuesListNotePath
      valuesList: {}
      valuesListNotePath: 00 Settings/10 Lists/Stages.md
    path: ""
    id: F1SI5I
---
