const translatedBlock = (id, content, language) => {
    const row = {
      ...content.blocks[id]
    };
    if (content.langData[language].hasOwnProperty(row.id)) {
      Object.assign(row, content.langData[language][row.id]);
    }

    // Falls back to en_GB
    if (content.langData[language]) {
      Object.assign(row, content.langData[language][row.id]);
    }
    return row;
  };

export default translatedBlock;