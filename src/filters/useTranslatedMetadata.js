
const useTranslatedMetadata = (page, language) => {
    if (!page) {
        return {};
      }
      // Don't use precalculated translatedMetadata, because it doesn't get updated by the cms
      const metadata = { ...page.pageData.metadata };
      Object.assign(metadata, page.pageData.content.langData[page.pageData.defaultLanguage]['metadata']);
  
      if (page.pageData.content.langData.hasOwnProperty(language) &&
        page.pageData.content.langData[language].hasOwnProperty('metadata')
      ) {
        Object.assign(metadata, page.pageData.content.langData[language]['metadata']);
      }
  
      return metadata;
  }

export default useTranslatedMetadata