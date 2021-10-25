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

export interface TextSimilarityResponse {
  timestamp: Date,
  time: number,
  lang: string,
  langConfidence: number,
  text1: string,
  url1: string,
  text2: string,
  url2: string,
  similarity: number
}
