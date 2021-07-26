const translatedRows = (content, language) => {
    if (!content) {
      return [];
    }

    const rows = content.layout.filter(rowId => {
      const row = content.blocks[rowId];
      return row.hasOwnProperty('languages') ? row.languages.includes(language) : true;
    }).map(rowId => content.blocks[rowId]);

    // Remove blockIds of blocks which aren't enabled in the current language
    return rows.map(row => ({
      ...row,
      blocks: row.blocks.filter(blockId =>
        content.blocks[blockId].languages.includes(language),
      ),
    }));
  }

export default translatedRows