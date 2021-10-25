export interface EntityExtractionResponse {
  time: number,
  annotations: Annotation[],
  lag: string,
  langConfidence: number,
  timestamp: Date
}

export interface Annotation {
  start: number,
  end: number,
  spot: string,
  confidence: number,
  id: number,
  title: string,
  uri: string,
  abstract: string,
  label: string,
  categories: string[],
  image: Image
}

export interface Image {
  full: string,
  thumbnail: string
}
