export interface Book {
    id: number;
    bookName: string;
    writerName: string;
    aboutWriter?: any;
    writerDeath: string;
    bookSlug: string;
}

export interface Chapter {
    id: number;
    chapterNumber: string;
    chapterEnglish: string;
    chapterUrdu: string;
    chapterArabic: string;
    bookSlug: string;
}

export interface Hadith {
    id: number;
    hadithNumber: string;
    englishNarrator: string;
    hadithEnglish: string;
    hadithUrdu: string;
    urduNarrator: string;
    hadithArabic: string;
    chapterId: string;
    bookSlug: string;
    volume: string;
    book: Book;
    chapter: Chapter;
}