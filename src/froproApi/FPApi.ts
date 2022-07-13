export interface IFPApi {
  title: string
  footer: {
    left: stringFormatHasHTML,
    right: stringFormatHasHTML,
  }
  sections: {[key: string]: FPApiSection}
}

// global
export type FPApiStatus = 'listed' | 'draft'
export type stringFormatHasHTML = string
export type FPApiSection =
    IFPApiSectionContact
  | IFPApiSectionFoundation
  | IFPApiSectionIntro
  | IFPApiSectionEvolution
  | IFPApiSectionPlan
  | IFPApiSectionPartners

export interface IFPApiImage {
  "url":      string
  "mediaUrl": string
  "width":    number
  "height":   number
  "resize": {
    "tiny":     string
    "small":    string
    "reg":      string
    "large":    string
  }
}

// api sections
export interface IFPApiSectionBase {
  status?: FPApiStatus
  title:  string
  text: stringFormatHasHTML
  type:
    "contact"
  | "evolution"
  | "foundation"
  | "introduction"
  | "plan"
  | "team"
}

export interface IFPApiSectionContact extends IFPApiSectionBase {
  type:   'contact'
}

export interface IFPApiSectionFoundation extends IFPApiSectionBase {
  "type": "foundation"
  "cover": {[key: string]: IFPApiImage} | null
}
export interface IFPApiSectionIntro extends IFPApiSectionBase {
  "type": "introduction"
  "cover": {[key: string]: IFPApiImage} | null
}

export interface IFPApiSectionEvolution extends IFPApiSectionBase {
  type:  'evolution'
  gallery: {[key: string]: IFPApiImage} | null
  timeline: IFPApiSectionTimelineItems[]
}

export interface IFPApiSectionPlan extends IFPApiSectionBase {
  type:  'plan'
}

export interface IFPApiSectionPartners extends IFPApiSectionBase {
  type: 'team',
  "team": IFPApiSectionPeopleItems[],

  "partners": {
    "name": string
    "topic": string
    "link": string
    "text": string
  }[]
}

// api items
export interface IFPApiSectionTimelineItems {
  date: string
  title: string
  text: stringFormatHasHTML
  categories: string
  cover: {[key: string]: IFPApiImage} | null
}

export interface IFPApiSectionPeopleItems {
  "name": string
  "topic": string
  "link": string
  "text": stringFormatHasHTML
  "cover"?: {
    [key: string]: IFPApiImage
  }
}
