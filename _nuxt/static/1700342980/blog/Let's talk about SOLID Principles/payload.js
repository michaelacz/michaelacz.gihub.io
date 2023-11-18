__NUXT_JSONP__("/blog/Let's%20talk%20about%20SOLID%20Principles", (function(a,b,c,d,e,f,g,h,i,j,k,l){return {data:[{blog:{slug:h,name:h,titleImage:"091120\u002Ftitle",briefdesc:j,postDate:"November 08, 2020",blogNumber:32,toc:[{depth:2,text:k}],body:{type:"root",children:[{type:b,tag:e,props:{},children:[{type:a,value:"\n  SOLID stands for 5 important design principles for Object Oriented Programming\n  (OOP). These 5 principles were introduced by Robert C. Martin (Uncle Bob), in\n  a paper Design Principles and Design Patterns in 2000. The actual SOLID\n  acronym was, however, identified later by Michael Feathers. The intention of\n  these principles is to make software designs more understandable, easier to\n  maintain and easier to extend. As a software engineer, these 5 principles are\n  essential to know!\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"S — Single responsibility principle"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  In programming, the Single Responsibility Principle states that every module\n  or class should have responsibility over a single part of the functionality\n  provided by the software. You may have heard the quote: “Do one thing and do\n  it well”. This refers to the single responsibility principle. In the article\n  Principles of Object Oriented Design, Robert C. Martin defines a\n  responsibility as a ‘reason to change’, and concludes that a class or module\n  should have one, and only one, reason to be changed.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"O — Open\u002Fclosed principle"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  In programming, the open\u002Fclosed principle states that software entities\n  (classes, modules, functions, etc.) should be open for extensions, but closed\n  for modification. If you have a general understanding of OOP, you probably\n  already know about polymorphism. We can make sure that our code is compliant\n  with the open\u002Fclosed principle by utilizing inheritance and\u002For implementing\n  interfaces that enable classes to polymorphically substitute for each other.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"L — Liskov substitution principle"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  This one is probably the hardest one to wrap your head around when being\n  introduced for the first time. In programming, the Liskov substitution\n  principle states that if S is a subtype of T, then objects of type T may be\n  replaced (or substituted) with objects of type S. This can be formulated\n  mathematically as\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Let ϕ(x) be a property provable about objects x of type T."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"\n    Then ϕ(y) should be true for objects y of type S, where S is a subtype of T.\n  "}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  More generally it states that objects in a program should be replaceable with\n  instances of their subtypes without altering the correctness of that program.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"I — Interface segregation principle"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  This principle is fairly easy to comprehend. In fact, if you’re used to using\n  interfaces, chances are that you’re already applying this principle. If not,\n  it’s time to start doing it! In programming, the interface segregation\n  principle states that no client should be forced to depend on methods it does\n  not use. Put more simply: Do not add additional functionality to an existing\n  interface by adding new methods. Instead, create a new interface and let your\n  class implement multiple interfaces if needed.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"D - Dependency inversion principle"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  In programming, the dependency inversion principle is a way to decouple\n  software modules. This principle states that\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:l,props:{style:"list-style-position: inside"},children:[{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"\n    High-level modules should not depend on low-level modules. Both should\n    depend on abstractions.\n  "}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"\n    Abstractions should not depend on details. Details should depend on\n    abstractions.\n  "}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  To comply with this principle, we need to use a design pattern known as a\n  dependency inversion pattern, most often solved by using dependency injection.\n  Dependency injection is a huge topic and can be as complicated or simple as\n  one might see the need for. Typically, dependency injection is used simply by\n  ‘injecting’ any dependencies of a class through the class’ constructor as an\n  input parameter.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c}]},{type:b,tag:"h2",props:{},children:[{type:a,value:k}]},{type:a,value:c},{type:b,tag:e,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Disclaimer : The views and opinions expressed in the article belong solely to the\n  author, and not necessarily to the author's employer, organisation, committee\n  or other group or individual.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:b,tag:d,props:{},children:[]},{type:b,tag:d,props:{},children:[]}]},dir:"\u002Fblogs",path:"\u002Fblogs\u002FLet's talk about SOLID Principles",extension:".md",createdAt:"2023-03-19T19:25:23.776Z",updatedAt:"2022-12-24T07:45:17.609Z"},title:h,description:j,ogImage:"\u002Fimg\u002Fblog\u002F091120\u002Ftitle.jpg",params:{slug:h}}],fetch:{},mutations:[["pageTitle\u002Fset","BLOG"]]}}("text","element","\n","br","p","\n  ","b","Let's talk about SOLID Principles","li","A brief explanation of the SOLID design principles by Uncle Bob.","By applying these 5 principles that make the SOLID acronym, we get to\n  benefit from a reusable, maintainable, scalable and easy testable codebase.\n","ul")));