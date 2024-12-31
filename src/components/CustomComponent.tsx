import { PortableTextComponents } from '@portabletext/react';

export const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className='text-xl font-bold text-accentDarkPrimary'>{children}</h1>,
    h2: ({ children }) => <h2 className='text-xl font-bold text-accentDarkPrimary'>{children}</h2>,
    h3: ({ children }) => <h3 className='text-xl font-bold text-accentDarkPrimary'>{children}</h3>,
    h4: ({ children }) => <h4 className='font-bold text-accentDarkPrimary'>{children}</h4>,
    // Ensure to wrap paragraphs properly
    normal: ({ children }) => <p className='text-lg leading-normal text-black dark:text-white'>{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className='list-disc list-inside ml-4'>{children}</ul>,
    number: ({ children }) => <ol className='list-decimal list-inside ml-4'>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className='list-disc marker:text-accentDarkSecondary list-inside ml-4'>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className='font-bold text-dark dark:text-white'>{children}</strong>,
  },
};
