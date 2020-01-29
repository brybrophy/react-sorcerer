export const srcSetData = [
  {
    src: 'https://dummyimage.com/300x200/f00/fff',
    width: 300
  },
  {
    src: 'https://dummyimage.com/400x300/f00/fff',
    width: 400
  },
  {
    src: 'https://dummyimage.com/800x600/f00/fff',
    width: 800
  },
  {
    src: 'https://dummyimage.com/1100x800/f00/fff',
    width: 1100
  }
];
export const expectedAlt = 'a test alt tag';
export const expectedSizes = '(min-width: 300) 300, 50vw';
export const expectedSrc = 'https://dummyimage.com/1024x800/f00/fff';
export const expectedSrcSet =
  'https://dummyimage.com/300x200/f00/fff 300w, https://dummyimage.com/400x300/f00/fff 400w, https://dummyimage.com/800x600/f00/fff 800w, https://dummyimage.com/1100x800/f00/fff 1100w, ';
