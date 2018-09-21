declare module 'react-srocerer' {
    export interface SrcSetData {
        src: string;
        width: string;
    }

    export interface ReactSorcererProps {
      alt: string;
      className?: string;
      coverage: number;
      src: string;
      srcSetData: { [key: string]: SrcSetData };
      style?: { [key: string]: string | number };
    }
  
    export interface ReactSorcererState {
      srcSet: string;
      sizes: string;
    }
  
    export default class ReactSorcerer extends React.Component<
      ReactSorcererProps,
      ReactSorcererState
    > {}
  }