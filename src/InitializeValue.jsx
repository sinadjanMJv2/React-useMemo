export const InitializeValue = new Array(29_999_999).fill(0).map((_, i) => {
    return {
      id: i + 1, // Assuming each item should have a unique id
      isSelected: i === 29_999_998, // Corrected index to match array length
    };
  });