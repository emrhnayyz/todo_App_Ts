Adding typescript=>https://create-react-app.dev/docs/adding-typescript/</br>
Project start command=>npx create-react-app my-app --template typescript</br>

# Notes
Typescript bir uzantı dilidir. Kavram olarak Javascript Superseti olarak geçer. Yani var olan javascript koduna ek özellikler ve avantajlar ekler.
Typescript, statik tür tanımları ekler.
Neden ortaya çıktı? Javascript günümüzde birçok alanda kullanılıyor. Ancak ortaya çıkarken bu denli bir geniş kullanım alanı düşünülmemişti. Dolayısyla bazı eksiklikleri vardı. Nesne tabanlı dillerin sağladığı tip kontrolü, sınıflar gibi yapılar bulunmuyordu, dinamik olmasından dolayı derleme aşaması yoktu ve hata kontrolü zor yapılıyordu. Bunların javascripte eklemek için typescript geliştirldi.

Js dynamic typing bir dildir.Aynı python gibi. Ama java,c,c++ ve typescript static typing dillerdir.
Yani dynamic typing dillerde typelar değişebilir.Örneğin;

```js
let a = 5;
a = "Dynamic typing";
```

Yukarıdaki kod bloğunda herhangi bir hata söz konusu olmuyor çünkü js dynamic typing bir dildir. Aynı şekilde kod bloğunun error verip vermediğini biz runtime da anlayabiliyoruz. Bu durum da developerlar için sancılı bir süreç.

```js
const a = 5;
a = "Dynamic typing";
//a değişkenini const ile tanınmladığımız için burada hata fırlatması lazım. Ama bu hatayı runtime da veriyor.
```

Static typing dillerde ise değişken tanımlarken ona bir type da tanımlıyoruz ve bu type a uygun değerler atayabiliyoruz.

```ts
let a: number = 5;
a = "Dynamic typing";
// burada bize ts den ötürü hata fırlatıyor.
//Type ı number olan bir değişkene sen string atayamazsın diye
```

Compile aşamasında ben hatayı görebiliyorum.

![jsvsts](https://www.freshersnow.com/wp-content/uploads/2023/02/Javascript-VS-Typescript.webp)

Typescript avantajları;

- Developerlar hatalarını erkenden tespit edebilir.
- Statict type bir dil olduğu için tahmin edilebilirlik sağlıyor. Yani bi değişken string olarak tanımlandıysa o değişken hep string olarak kalacaktır.
- OOP(Class,Interface,Inheritance)
- More types
- js in kullanıldığı her yerde kulalnılabilir.

**Tarayıcılar Typescript kodunu anlayamazlar. Bu yüzden bir derleyici yardımı ile TS kodu Js koduna dönüştürülür.** (tsc=> typescript compiler)

Ne zaman kullanılmalı?

- Geniş ölçüde kod yapısına sahipseniz. Yani büyük ölçekli bir proje ise.
- Kullandığınız framework veya kütüphane kullanmanızı öneriyorsa.
- Static type ihtiyacınız varsa

Typescript tüm ecmascript versiyonlarını destekler. Ama compile ettiği zaman tüm taraycıların desteklediği ES5 e dönüştürür. Örneğin;

main.ts

```
const a = "anthony"

const myName =`Name: ${a}`
```

main.js

```
var a = "anthony";
var myName = "Name: ".concat(a);

// es5 te const olmadığı için var olarak compile etti.
//yine template string olmadığı için de diğer bir yöntem olan concat ı kullandı.
```

Ama tabi bunu istersek customize edebiliriz.

Spread operatörünü deneyebilirsiniz:).

**Tsc compile aşamasında hatayı fırlatır ama dönüştürmeye devam eder.**

#### TS Types

- **Any**: Her şey any olabilir. Genelde kaçış rampası olarak kullanılıyor. Her yer de any kullanmak aslında js yazmak demektir. Ts kullanmanın bir anlamı kalmıyor.

```
let x;
x="merhaba";
burada x in type ını ts any olarak atıyor.
```

Eğer değişkeni declare edip değerini sonra atayacaksak ve any tipinde olmasını istemiyorsak tanımladığımız yerde @typeannotations `:type` kullanarak tipini de declare edebiliriz:

```
let x:string;
x="merhaba";
burada x in type ını string olarak belirlemiş olduk.
```

Ama değişkene değerini declare ederken değerinide vereceksek @typeannotations kullanmamıza gerek yok. Typescript değerin tipine göre değişkenimizin typeını belirliyor. **TYPE INFERENCE**

```
let x:string="merhaba"; //yani buradaki işleme gerek yok
let y = "dünya";
//x ve y yi ts string olarak belirliyor
```

- **String**:

```
let x:string="merhaba";
let y = "dünya";
```

- **Number**

```
let x:number= 67;
let y = 60.5;
```

- **Boolean**

```
let x:boolean= false;
let y = true;
```

- **Array**: Arraylerde durum farklı. İçine atacağınız elemanalrı tipine göre değişkene type tanımlaması yapıyorsunuz.

```
    let myArr: string[] = ["a","b","c"] //bu arraye atayacağınız elemanların hepsi string tipli olmalıdır.
    let myArr1:number[] = [1,2,3]
    let myAnyArr : any[] = ["a",1,true]
```

Eğer arrayin içindeki elemanların tipini ve sayısını biliyorsanız tanımlarken tuple tipinide kullanabilirsiniz.

- **Tuple**:yani birden fazla tipli array

```
let myArr:[string,number]=["error",25]
```

- **Unknown**: Yapı olarak any ile aynıdır. Tek farkı any tipinde olan bir değişkeni tipi belirli olan bir değişkene atayabilirsiniz. Ama unknown tipinde olan bir değişkeni tipi belirli olan bir değişkene atayamazsınız.

```
let a = "anthony"

let myName =`Name: ${a}`

let x:any = 5;

a = x;

let y:unknown = 5

myName = y ; // Type 'unknown' is not assignable to type 'string'.
```

###### Type Assertions

2 yöntemi vardır. Amacı typescriptin fırlattığı hataları engellemek ve type avantajlarından yararlanmak(intellisense gibi). Ama runtime aşamasında hataya yol açabilir. Emin olmadığımız sürece kullanmamalıyız.

```
let myAge;
myAge = 29;
const newAge = (<string>myAge).toLowerCase();
const newAge2 = (myAge as string).toLowerCase();
//tsyi susturyoruz ama runtime aşamasında hata döner.çünkü numberın toLowerCase metodu yoktur.
```

- **Object Type**:Siz bir object tanımladığınızda type ınference tanımladığınız değerlere göre objeye tip tanımlamalarını yapıyor.

```
    let todo = {
        task: "deneme 1",
        description:"deneme 1 deneme 1",
        is_done:"false",
    }
    bu şekilde tanımlama yaptığımzıda ts typeları belirliyor. ama diyelim değerlerimiz belli değil sadece değişkeni declare edeceğiz o zaman da:
    let todo : {
        task:string,
        description:string,
        is_done:boolean,
    }
    todo = {
        task: "deneme 1",
        description:"deneme 1 deneme 1",
        is_done:"false",
    }
    Şimdilik bu şekilde de yapabiliriz. sonra farklı yolları da göreceğiz.
```

- **Union Type**: Typeların kesişimi diyebiliriz. Yani diyoruz ki bu değişken şu typeleri kabul edebilir.

```
    let todo : {
        task:string,
        description:string,
        is_done:boolean,
        count: string | number
    }
    todo = {
        task: "deneme 1",
        description:"deneme 1 deneme 1",
        is_done:"false",
        count:5,
    }
    todo.count = "5" // bu şekilde hata vermesinin önüne geçebiliriz
```

- **Literal Type**: Spesifik olarak içerik de atamış oluyoruz. Başka bir değer alamıyor.

```
    let todo : {
        task:string,
        description:string,
        is_done:boolean,
        category: "work" | "travel"
    }
    todo.category = "enjoy" // hata atar
    todo.category = "work" //ya da
    todo.category = "travel"
```

- **Custom Type**: bir type değişkeni tanımlamamıza yarıyor. Daha sonra bunu isteğimiz yerde kullanabiliyoruz. Örneğin yukarıdaki todoyu ele alabiliriz.

```
    type Todo = {
        task:string,
        description:string,
        is_done:boolean,
    }
    let todo : Todo = {
        task: "deneme 1",
        description:"deneme 1 deneme 1",
        is_done:"false",
    }

    // custom typelı array
    let todos : Todo[] = [
        {
        task: "deneme 1",
        description:"deneme 1 deneme 1",
        is_done:"false",
    },
    {
        task: "deneme 2",
        description:"deneme 2 deneme 2",
        is_done:"false",
    }
    ]
```

**Custom typelar compile edildiğinde js dosyadında yer almazlar. Typescripte özeldirler.**

- **Function**: Void ve return u olan olarak iki çeşit fonksiyon vardır. Parametrelerine tip verebiliriz. Böylelikle belirlediğimizin dışında parametre gönderemez

```
    const myfunc = (num1:number,num2:number) =>{
        return num1 + num2
    }
    //void
    const myfunc = (num1:number,num2:number) =>{
        console.log(num1 + num2)
    }
```

- **? Optional Params**: Örneğin bir obje typeı belirliyorsunuz yada interfacei içindeki bir alanın olsa da olur olmasa da olur diyorsak ? kullanabiliriz:

```
   type Todo = {
       task:string,
       description?:string,//description olsa da olur olmasada olur diyoruz.
       is_done:boolean,
   }
   let todo : Todo = {
       task: "deneme 1",
       description:"deneme 1 deneme 1",
       is_done:"false",
   }
   let todo2 : Todo = {
       task: "deneme 1",
       is_done:"false",
   }
```

- **Interface**:TypeScript’teki bir Interface, aşağı yukarı bir object için önceden kurgulanmış plan gibi davranır. Object’lerde ki property(özellik) adları ve value(değerleri) hakkındaki bilgileri tanımlar. Bu, TypeScript derleyicisinin object’lerinizi doğrulamasına yardımcı olabilir, böylece object’leri yanlış biçimde tanımlamazsınız. Bir typescript dosyasında (.ts) **Interface** anahtar sözcüğünü ve ardından interface adı ve interface gövdesini kullanarak bir interface tanımlayabilirsiniz. Aşağıdaki örneğe bir göz atın:

```tsx
interface Course {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  price: number;
  currency: string;
  isActive: boolean;
}
const webCourse: Course = {
  title: "Typescript Basics",
  description: "A course about Typescript",
  createdAt: new Date(),
  updatedAt: new Date(),
  price: 1500,
  currency: "USD",
  isActive: true,
};
```

// Interfaces’da, ? kullanarak değerin kullanımını isteğe bağlı olduğunu belirtebilirsiniz veya undefined ekleyerek de bu özelliği kullanabilirsiniz.

```tsx
interface Course {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  price?: number; //Optional
  currency: string | undefined; //Optional
  isActive: boolean;
}
const webCourse: Course = {
  title: "Typescript Basics",
  description: "A course about Typescript",
  createdAt: new Date(),
  updatedAt: new Date(),
  isActive: true,
};
```

- **Interface Extend**: Bir interfaceten miras alarak yeni bir interface de oluşturabiliriz.

```tsx
interface Course {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  price?: number; //Optional
  currency: string | undefined; //Optional
  isActive: boolean;
}
interface NewCourse extend Course {
    instructor:string
}
let mycourse: NewCourse = {
  title: "Typescript Plus",
  description: "A course about Typescript",
  createdAt: new Date(),
  updatedAt: new Date(),
  price: 2000,
  currency: "USD",
  isActive: true,
  instructor: "anthony",
};
```

