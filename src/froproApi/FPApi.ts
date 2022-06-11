export interface IFPApi {
  title: string
  sections: (IFPApiSectionContact | IFPApiSectionTimeline)[]
}

export interface IFPApiSection {
  status: FPApiStatus
  title:  string
  description: stringFormatHasHTML
  type:
    "contact"
  | "evolution"
  | "fondation"
  | "introduction"
  | "plan"
  | "timeline"
}

export interface IFPApiSectionContact extends IFPApiSection {
  type:   'contact'
}
export interface IFPApiSectionTimeline extends IFPApiSection {
  type:   'timeline'
  items: IFPApiSectionTimelineItems[]
}

export interface IFPApiSectionTimelineItems {
  date: string
  title: string
  text: stringFormatHasHTML
}

export type FPApiStatus = 'listed' | 'draft'
export type stringFormatHasHTML = string
