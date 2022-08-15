export interface IFPApi {
  title: string
  footer: {
    left: StringFormatHasHTML
    right: StringFormatHasHTML
  }
  sections: {[key: string]: FPApiSection}
  description: StringFormatHasHTML | null
  newsletterCode: StringFormatHasHTML | null
}

// global
export type FPApiStatus = 'listed' | 'draft'
export type StringFormatHasHTML = string
export type StringFormatWithReversesMailHasHTML = string
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
  text: StringFormatHasHTML
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
  "team": IFPApiSectionPeopleItems[]
  "conseil": IFPApiSectionPartnerItems[]
}
export interface IFPApiSectionIntro extends IFPApiSectionBase {
  "type": "introduction"
  "cover": {[key: string]: IFPApiImage} | null
  "articles": {
      "image": {[key: string]: IFPApiImage},
      "items": string[]
    }[]
}

export interface IFPApiSectionEvolution extends IFPApiSectionBase {
  type:  'evolution'
  gallery: {[key: string]: IFPApiImage} | null
  timeline: IFPApiSectionTimelineItems[]
}

export interface IFPApiSectionPlan extends IFPApiSectionBase {
  type:  'plan'
  "zoneReception":    string
  "zoneLearningLab":  string
  "zoneMakerLab":     string
  "zoneFoodLab":      string
  "zoneSchool":       string
  "zoneNursery":      string
  "zoneEntreprises":  string
}

export interface IFPApiSectionPartners extends IFPApiSectionBase {
  type: 'team',
  "team": IFPApiSectionPeopleItems[],
  "partners": IFPApiSectionPartnerItems[]
}

// api items
export interface IFPApiSectionTimelineItems {
  date: string
  title: string
  text: StringFormatHasHTML
  categories: string
  cover: {[key: string]: IFPApiImage} | null
}

export interface IFPApiSectionPartnerItems {
  "name": string
  "topic": string
  "link": string
  "text": StringFormatWithReversesMailHasHTML
}


export interface IFPApiSectionPeopleItems {
  "name": string
  "topic": string
  "link": string
  "text": StringFormatWithReversesMailHasHTML
  "cover"?: {
    [key: string]: IFPApiImage
  }
}
