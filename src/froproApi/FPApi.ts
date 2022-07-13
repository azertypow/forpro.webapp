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
export type fpApiSections = IFPApiSectionContact
                            | IFPApiSectionFoundation
                            | IFPApiSectionIntro
                            | IFPApiSectionEvolution
                            | IFPApiSectionPlan

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

// api items
export interface IFPApiSectionTimelineItems {
  date: string
  title: string
  text: stringFormatHasHTML
  categories: string
  cover: {[key: string]: IFPApiImage} | null
}
