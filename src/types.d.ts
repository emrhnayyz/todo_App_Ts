// .d.ts uzantısnı typescript global alan olarak görüyor. Vu bu uzantıdaki dosyalarda tanımladığımız typelara herhangi bir export-import yapmadan erişim sağlayabiliyoruz

interface TodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}

type AddFn = (text: string) => void;

type DeleteFn = (id : string | number) => void;

type ToggleFn = (item:TodoType) => void;