const quotes = [
    // ACTIVIDAD
    {
        text: "Así como el hierro se oxida por falta de uso, también la inactividad destruye el intelecto.",
        author: "LEONARDO DA VINCI",
        category: "ACTIVIDAD"
    },
    {
        text: "Somos lo que hacemos, no lo que pensamos ni lo que sentimos.",
        author: "ANÓNIMO",
        category: "ACTIVIDAD"
    },
    {
        text: "La respuesta más rápida es la acción.",
        author: "PROVERBIO AMERICANO",
        category: "ACTIVIDAD"
    },
    {
        text: "Actuar es fácil, pensar es difícil; actuar según se piensa es aún más difícil.",
        author: "GOETHE",
        category: "ACTIVIDAD"
    },
    {
        text: "Cada uno de los movimientos de todos los individuos se realizan por tres únicas razones: por honor, por dinero o por amor.",
        author: "NAPOLEÓN I",
        category: "ACTIVIDAD"
    },
    {
        text: "Una acción es la perfección y la publicación del pensamiento.",
        author: "EMERSON",
        category: "ACTIVIDAD"
    },
    {
        text: "La actividad es lo que hace feliz al hombre.",
        author: "GOETHE",
        category: "ACTIVIDAD"
    },
    {
        text: "Las cosas no se dicen, se hacen, porque al hacerlas se dicen solas.",
        author: "WOODY ALLEN",
        category: "ACTIVIDAD"
    },
    
    // AHORRO
    {
        text: "Compra solamente lo necesario; lo superfluo, aunque cueste solo un céntimo, es caro.",
        author: "SÉNECA",
        category: "AHORRO"
    },
    {
        text: "El ahorro es una cosa muy hermosa, especialmente cuando tus padres lo han hecho por ti.",
        author: "W. CHURCHILL",
        category: "AHORRO"
    },
    {
        text: "Cuida de los pequeños gastos; un pequeño agujero hunde un barco.",
        author: "BENJAMIN FRANKLIN",
        category: "AHORRO"
    },
    {
        text: "El camino hacia la riqueza depende fundamentalmente de dos palabras: trabajo y ahorro.",
        author: "BENJAMIN FRANKLIN",
        category: "AHORRO"
    },
    {
        text: "Una ganga no es una ganga a menos que sea algo que necesites.",
        author: "SÍDNEY CARROL",
        category: "AHORRO"
    },
    {
        text: "Gasta siempre una moneda menos de lo que ganes.",
        author: "CESARE CANTÚ",
        category: "AHORRO"
    },
    
    // AMBICIÓN
    {
        text: "Quien todo lo quiere, todo lo pierde.",
        author: "REFRÁN",
        category: "AMBICIÓN"
    },
    {
        text: "Quien se empeña en pegarle una pedrada a la luna no lo conseguirá, pero terminará sabiendo manejar la honda.",
        author: "PROVERBIO ÁRABE",
        category: "AMBICIÓN"
    },
    {
        text: "Un hombre no es desdichado a causa de la ambición, sino porque esta lo devora.",
        author: "MONTESQUIEU",
        category: "AMBICIÓN"
    },
    {
        text: "La ambición es un vicio, pero puede ser madre de la virtud.",
        author: "QUINTILIANO",
        category: "AMBICIÓN"
    },
    
    // AVARICIA
    {
        text: "Avaro es el que no gasta en lo que debe, ni lo que debe, ni cuando debe.",
        author: "ARISTÓTELES",
        category: "AVARICIA"
    },
    {
        text: "La avaricia rompe el saco.",
        author: "REFRÁN",
        category: "AVARICIA"
    },
    {
        text: "No dejes lo ganado por lo que has de ganar.",
        author: "ARCIPRESTE DE HITA",
        category: "AVARICIA"
    },
    {
        text: "Mejor es morir como pobre que vivir como miserable.",
        author: "PERIANDRO",
        category: "AVARICIA"
    },
    
    // AZAR
    {
        text: "Azar es una palabra vacía de sentido, nada puede existir sin causa.",
        author: "VOLTAIRE",
        category: "AZAR"
    },
    {
        text: "El azar tiene muy mala leche y muchas ganas de broma.",
        author: "ARTURO PÉREZ-REVERTE",
        category: "AZAR"
    },
    {
        text: "El hombre tiene mil planes para sí mismo. El azar, solo uno para cada uno.",
        author: "MENCIO",
        category: "AZAR"
    },
    {
        text: "El momento elegido por el azar vale siempre más que el momento elegido por nosotros mismos.",
        author: "PROVERBIO CHINO",
        category: "AZAR"
    },
    {
        text: "¿Por qué llamar caminos a los surcos del azar?",
        author: "ANTONIO MACHADO",
        category: "AZAR"
    },
    
    // BONDAD
    {
        text: "El único símbolo de superioridad que conozco es la bondad.",
        author: "BEETHOVEN",
        category: "BONDAD"
    },
    {
        text: "El bien que hemos hecho nos da una satisfacción interior, que es la más dulce de todas las pasiones.",
        author: "RENÉ DESCARTES",
        category: "BONDAD"
    },
    {
        text: "El bien es lento porque va cuesta arriba. El mal es rápido porque va cuesta abajo.",
        author: "ALEJANDRO DUMAS",
        category: "BONDAD"
    },
    {
        text: "No es por la benevolencia del carnicero, del cervecero y del panadero que podemos contar con nuestra cena, sino por su propio interés.",
        author: "ADAM SMITH",
        category: "BONDAD"
    },
    
    // BREVEDAD
    {
        text: "Lo bueno, si breve, dos veces bueno.",
        author: "BALTASAR GRACIÁN",
        category: "BREVEDAD"
    },
    {
        text: "Una síntesis vale por diez análisis.",
        author: "EUGENI D´ORS",
        category: "BREVEDAD"
    },
    {
        text: "Sé breve en tus razonamientos, que ninguno hay gustoso si es largo.",
        author: "MIGUEL DE CERVANTES",
        category: "BREVEDAD"
    },
    
    // CALIDAD
    {
        text: "La calidad nunca es un accidente; siempre es el resultado de un esfuerzo de la inteligencia.",
        author: "JOHN RUSKIN",
        category: "CALIDAD"
    },
    {
        text: "He ofendido a Dios y a la humanidad porque mi trabajo no tuvo la calidad que debía haber tenido.",
        author: "LEONARDO DA VINCI",
        category: "CALIDAD"
    },
    {
        text: "De dinero y calidad, la mitad de la mitad.",
        author: "REFRÁN",
        category: "CALIDAD"
    },
    
    // CERTIDUMBRE
    {
        text: "No hay nada tan cierto en el mundo como la muerte y los impuestos.",
        author: "BENJAMIN FRANKLIN",
        category: "CERTIDUMBRE"
    },
    {
        text: "Si de algo soy rico es de perplejidades y no de certezas.",
        author: "JORGE LUIS BORGES",
        category: "CERTIDUMBRE"
    },
    
    // COMERCIO
    {
        text: "Ninguna nación se ha arruinado por causa del comercio.",
        author: "BENJAMIN FRANKLIN",
        category: "COMERCIO"
    },
    
    // CONOCIMIENTO
    {
        text: "Solo hay un bien: el conocimiento. Solo hay un mal: la ignorancia.",
        author: "SÓCRATES",
        category: "CONOCIMIENTO"
    },
    {
        text: "Vacía tu bolsillo en tu mente, y tu mente llenará tu bolsillo.",
        author: "BENJAMIN FRANKLIN",
        category: "CONOCIMIENTO"
    },
    {
        text: "Invertir en conocimientos produce siempre los mejores beneficios.",
        author: "BENJAMIN FRANKLIN",
        category: "CONOCIMIENTO"
    },
    {
        text: "Nuestro conocimiento es necesariamente finito, mientras que nuestra ignorancia es necesariamente infinita.",
        author: "KARL POPPER",
        category: "CONOCIMIENTO"
    },
    
    // DAR
    {
        text: "Da lo que tienes para que merezcas recibir lo que te falta.",
        author: "SAN AGUSTÍN",
        category: "DAR"
    },
    {
        text: "Gana todo lo que puedas; ahorra todo lo que puedas; da todo lo que puedas.",
        author: "JOHN WESLEY",
        category: "DAR"
    },
    
    // DEUDAS
    {
        text: "Es mejor acostarse sin cenar que levantarse con deudas.",
        author: "BENJAMIN FRANKLIN",
        category: "DEUDAS"
    },
    {
        text: "Solo hay dos medios de pagar las deudas: por el trabajo y por el ahorro.",
        author: "THOMAS CARLYLE",
        category: "DEUDAS"
    },
    {
        text: "Cuando las deudas no se pagan porque no se puede, lo mejor es no hablar de ellas y barajar.",
        author: "CAMILO JOSÉ CELA",
        category: "DEUDAS"
    },
    
    // DINERO
    {
        text: "Si yo te debo una libra, tengo un problema; pero si te debo un millón, el problema es tuyo.",
        author: "KEYNES",
        category: "DINERO"
    },
    {
        text: "De dinero y calidad, la mitad de la mitad.",
        author: "REFRÁN",
        category: "DINERO"
    },
    {
        text: "No estimes el dinero en más ni en menos de lo que vale, porque es un buen siervo y un mal amo.",
        author: "ALEJANDRO DUMAS (HIJO)",
        category: "DINERO"
    },
    {
        text: "Quienes creen que el dinero lo hace todo, terminan haciendo todo por dinero.",
        author: "VOLTAIRE",
        category: "DINERO"
    },
    {
        text: "¡Hay tantas cosas en la vida más importantes que el dinero! ¡Pero cuestan tanto!",
        author: "GROUCHO MARX",
        category: "DINERO"
    },
    {
        text: "Algún dinero evita preocupaciones; mucho, las atrae.",
        author: "CONFUCIO",
        category: "DINERO"
    },
    {
        text: "Si quieres conocer el valor del dinero, anda, y prueba a tomarlo en préstamo.",
        author: "BENJAMIN FRANKLIN",
        category: "DINERO"
    },
    {
        text: "Poderoso caballero es don Dinero.",
        author: "FRANCISCO DE QUEVEDO",
        category: "DINERO"
    },
    {
        text: "No pongas tu interés en el dinero, pero pon tu dinero a interés.",
        author: "O. WENDELL HOLMES",
        category: "DINERO"
    },
    {
        text: "El dinero es mejor que la pobreza, aun cuando solo sea por razones financieras.",
        author: "WOODY ALLEN",
        category: "DINERO"
    },
    {
        text: "El dinero es como un brazo o una pierna: o se usa o se pierde.",
        author: "HENRY FORD",
        category: "DINERO"
    },
    {
        text: "Somos naturaleza. Poner al dinero como bien supremo nos conduce a la catástrofe.",
        author: "JOSÉ LUIS SAN PEDRO",
        category: "DINERO"
    },
    
    // ECONOMÍA
    {
        text: "La economía consiste en saber gastar y el ahorro en saber guardar.",
        author: "O. SWETT MARDEN",
        category: "ECONOMÍA"
    },
    {
        text: "Ningún problema económico tiene una solución puramente económica.",
        author: "JOHN STUART MILL",
        category: "ECONOMÍA"
    },
    {
        text: "Hay dos clases de economistas; los que quieren hacer más ricos a los ricos y los que queremos hacer menos pobres a los pobres.",
        author: "JOSÉ LUIS SAN PEDRO",
        category: "ECONOMÍA"
    },
    {
        text: "En la vida hay que escoger entre ganar dinero o gastarlo. No hay tiempo suficiente para ambas cosas.",
        author: "ÉDOUARD BOUDERT",
        category: "ECONOMÍA"
    },
    {
        text: "Un saco vacío se mantiene muy difícilmente en pie.",
        author: "BENJAMIN FRANKLIN",
        category: "ECONOMÍA"
    },
    {
        text: "Quien vive con más desahogo no es el que tiene más, sino el que administra bien lo mucho o poco que tiene.",
        author: "ÁNGEL GANIVET",
        category: "ECONOMÍA"
    },
    
    // ESTADÍSTICAS
    {
        text: "Las cifras no mienten, pero los mentirosos también usan cifras.",
        author: "ANÓNIMO",
        category: "ESTADÍSTICAS"
    },
    {
        text: "La estadística es una ciencia que demuestra que si mi vecino tiene dos coches y yo ninguno, los dos tenemos uno.",
        author: "G. BERNARD SHAW",
        category: "ESTADÍSTICAS"
    },
    
    // ÉXITO
    {
        text: "El éxito consiste en obtener lo que se desea. La felicidad, en disfrutar lo que se obtiene.",
        author: "EMERSON",
        category: "ÉXITO"
    },
    {
        text: "El secreto de mi éxito está en pagar como si fuera pródigo y en vender como si estuviera en quiebra.",
        author: "JOHN FORD",
        category: "ÉXITO"
    },
    {
        text: "La disciplina es la parte más importante del éxito.",
        author: "TRUMAN CAPOTE",
        category: "ÉXITO"
    },
    
    // FORTUNA
    {
        text: "Al que fortuna le vista, fortuna le desnuda.",
        author: "PROVERBIO ÁRABE",
        category: "FORTUNA"
    },
    {
        text: "El que no sabe gozar de la ventura cuando le viene, no debe quejarse si se pasa.",
        author: "MIGUEL DE CERVANTES",
        category: "FORTUNA"
    },
    {
        text: "Suerte es lo que sucede cuando la preparación y la oportunidad se encuentran y fusionan.",
        author: "VOLTAIRE",
        category: "FORTUNA"
    },
    
    // FORMACIÓN
    {
        text: "Dime y lo olvido, enséñame y lo recuerdo, involúcrame y lo aprendo.",
        author: "BENJAMIN FRANKLIN",
        category: "FORMACIÓN"
    },
    {
        text: "Hay alguien tan inteligente que aprende de la experiencia de los demás.",
        author: "VOLTAIRE",
        category: "FORMACIÓN"
    },
    {
        text: "Si quieres aprender, enseña.",
        author: "CICERÓN",
        category: "FORMACIÓN"
    },
    {
        text: "Lo que de raíz se aprende nunca del todo se olvida.",
        author: "SÉNECA",
        category: "FORMACIÓN"
    },
    {
        text: "Enseñar no es una función vital, porque no tienen el fin en sí misma; la función vital es aprender.",
        author: "ARISTÓTELES",
        category: "FORMACIÓN"
    },
    {
        text: "Me lo contaron y lo olvidé; lo vi y lo entendí; lo hice y lo aprendí.",
        author: "CONFUCIO",
        category: "FORMACIÓN"
    },
    {
        text: "Yo no enseño a mis alumnos, solo les proporciono las condiciones en las que puedan aprender.",
        author: "ALBERT EINSTEIN",
        category: "FORMACIÓN"
    },
    
    // FUTURO
    {
        text: "Me interesa el futuro porque es el sitio donde voy a pasar el resto de mi vida.",
        author: "WOODY ALLEN",
        category: "FUTURO"
    },
    {
        text: "Si no piensas en tu porvenir, no lo tendrás.",
        author: "JOHN KENNETH GALBRAITH",
        category: "FUTURO"
    },
    {
        text: "No pienso nunca en el futuro porque llega muy pronto.",
        author: "ALBERT EINSTEIN",
        category: "FUTURO"
    },
    {
        text: "El porvenir es un lugar cómodo para colocar los sueños.",
        author: "ANATOLE FRANCE",
        category: "FUTURO"
    },
    {
        text: "Cuanto más atrás puedas mirar, más adelante verás.",
        author: "WINSTON CHURCHILL",
        category: "FUTURO"
    },
    
    // IDEAS
    {
        text: "Cuando las circunstancias cambian, yo cambio de opinión. ¿Usted qué hace?",
        author: "KEYNES",
        category: "IDEAS"
    },
    {
        text: "Un hombre con una idea nueva es un loco hasta que la idea triunfa.",
        author: "MARK TWAIN",
        category: "IDEAS"
    },
    {
        text: "Como fuerza social, un individuo con una idea vale por noventa y nueve con un solo interés.",
        author: "JOHN STUART MILL",
        category: "IDEAS"
    },
    {
        text: "Las ideas están exentas de impuestos.",
        author: "PROVERBIO ALEMÁN",
        category: "IDEAS"
    },
    {
        text: "Si no chocamos contra la razón, nunca llegaremos a nada.",
        author: "ALBERT EINSTEIN",
        category: "IDEAS"
    },
    {
        text: "La creencia no es el principio, sino el fin de todo conocimiento.",
        author: "GOETHE",
        category: "IDEAS"
    },
    {
        text: "La mayoría de las ideas fundamentales de la ciencia son esencialmente sencillas y, por regla general, pueden ser expresadas en un lenguaje comprensible para todos.",
        author: "ALBERT EINSTEIN",
        category: "IDEAS"
    },
    {
        text: "La ciencia se compone de errores, que a su vez, son los pasos hacia la verdad.",
        author: "JULIO VERNE",
        category: "IDEAS"
    },
    {
        text: "La ignorancia afirma o niega rotundamente; la ciencia duda.",
        author: "VOLTAIRE",
        category: "IDEAS"
    },
    {
        text: "Ciencia es todo aquello sobre lo cual siempre cabe discusión.",
        author: "JOSÉ ORTEGA Y GASSET",
        category: "IDEAS"
    },
    {
        text: "La ciencia es la progresiva aproximación del hombre al mundo real.",
        author: "MAX PLANCK",
        category: "IDEAS"
    },
    
    // IMPUESTOS
    {
        text: "El contribuyente es una persona que trabaja para el Gobierno pero sin haber hecho las oposiciones a funcionario.",
        author: "R. REAGAN",
        category: "IMPUESTOS"
    },
    {
        text: "En este mundo, ninguna cosa es cierta, salvo la muerte y los impuestos.",
        author: "BENJAMIN FRANKLIN",
        category: "IMPUESTOS"
    },
    
    // INTERÉS
    {
        text: "El interés es el perfume del capital.",
        author: "VOLTAIRE",
        category: "INTERÉS"
    },
    {
        text: "No pongas tu interés en el dinero, pero pon tu dinero a interés.",
        author: "O. WENDELL HOLMES",
        category: "INTERÉS"
    },
    
    // LIDERAZGO
    {
        text: "Las voluntades débiles se traducen en discursos; las fuertes, en actos.",
        author: "GUSTAVE LE BON",
        category: "LIDERAZGO"
    },
    {
        text: "La mayor parte de los hombres son capaces más bien de grandes acciones que de buenas acciones.",
        author: "MONTESQUIEU",
        category: "LIDERAZGO"
    },
    {
        text: "El hombre puede trepar hasta las cumbres más altas, pero no puede vivir allí mucho tiempo.",
        author: "G. BERNARD SHAW",
        category: "LIDERAZGO"
    },
    
    // MERCADOS
    {
        text: "A corto plazo el mercado de acciones se comporta como una máquina de votar, pero a largo plazo actúa como una báscula.",
        author: "BENJAMÍN GRAHAM",
        category: "MERCADOS"
    },
    {
        text: "El precio es lo que pagas, el valor lo que recibes.",
        author: "WARREN BUFFETT",
        category: "MERCADOS"
    },
    {
        text: "No invierta en negocios que no pueda entender.",
        author: "WARREN BUFFETT",
        category: "MERCADOS"
    },
    {
        text: "Los mercados pueden mantener su irracionalidad más tiempo del que tú puedes mantener tu solvencia.",
        author: "KEYNES",
        category: "MERCADOS"
    },
    
    // NEGOCIOS
    {
        text: "La mejor inversión que puedes hacer es en ti mismo.",
        author: "WARREN BUFFETT",
        category: "NEGOCIOS"
    },
    {
        text: "La mejor forma de predecir tu futuro es crearlo.",
        author: "PETER F.DRUCKER",
        category: "NEGOCIOS"
    },
    {
        text: "En los negocios, no obtienes lo que mereces, sino lo que negocias.",
        author: "CHESTER KARRASS",
        category: "NEGOCIOS"
    },
    {
        text: "Para tener éxito, hay que actuar a lo grande, pensar a lo grande y hablar a lo grande.",
        author: "ARISTÓTELES ONASSIS",
        category: "NEGOCIOS"
    },
    {
        text: "Dado que su objetivo es crear clientes, una empresa comercial tiene dos funciones básicas, y solo dos: la mercadotecnia y la innovación. La mercadotecnia y la innovación producen beneficios, lo demás son costos.",
        author: "PETER DRUCKER",
        category: "NEGOCIOS"
    },
    
    // OCIO
    {
        text: "La ociosidad, como el moho, desgasta mucho más rápidamente que el trabajo.",
        author: "BENJAMIN FRANKLIN",
        category: "OCIO"
    },
    {
        text: "La ociosidad camina con lentitud, por eso todos los vicios la alcanzan.",
        author: "SAN AGUSTÍN",
        category: "OCIO"
    },
    {
        text: "La ociosidad es madre de todos los vicios.",
        author: "REFRÁN",
        category: "OCIO"
    },
    
    // PRECIOS
    {
        text: "Acepto el fraude en el precio, pero nunca en la calidad.",
        author: "THOMAS FULLER",
        category: "PRECIOS"
    },
    {
        text: "Nunca temas pedir demasiado cuando vendas, ni ofrecer muy poco cuando compres.",
        author: "WARREN BUFFETT",
        category: "PRECIOS"
    },
    {
        text: "El precio es lo que pagas. El valor es lo que recibes.",
        author: "WARREN BUFFETT",
        category: "PRECIOS"
    },
    {
        text: "Nada que sea bueno…es gratis.",
        author: "JORGE BUCAY",
        category: "PRECIOS"
    },
    {
        text: "La rareza fija el precio de las cosas.",
        author: "PETRONIO",
        category: "PRECIOS"
    },
    
    // RIESGO
    {
        text: "¿Qué sería de la vida, si no tuviéramos el valor de intentar algo nuevo?",
        author: "VINCENT VAN GOGH",
        category: "RIESGO"
    },
    {
        text: "El que vive prudentemente, vive tristemente.",
        author: "VOLTAIRE",
        category: "RIESGO"
    },
    {
        text: "Toda persona debe decidir una vez en su vida si se lanza a triunfar, arriesgándolo todo, o si se sienta a ver el paso de los triunfadores.",
        author: "THOMAS ALBA EDISON",
        category: "RIESGO"
    },
    
    // RIQUEZA
    {
        text: "La riqueza es como el agua salada; cuanto más se bebe, más sed da.",
        author: "ARTHUR SCHOPENHAUER",
        category: "RIQUEZA"
    },
    {
        text: "¿Qué es la riqueza? Nada, si no se gasta; nada, si se malgasta.",
        author: "ANDRÉ BRETON",
        category: "RIQUEZA"
    },
    {
        text: "Cuanto mayor la riqueza, más espesa la suciedad.",
        author: "J.K. GALBRAITH",
        category: "RIQUEZA"
    },
    
    // SOLIDARIDAD
    {
        text: "Una de las ventajas de las buenas acciones es la de elevar el alma y disponerla a hacer otras mejores.",
        author: "JEAN JACQUES ROUSSEAU",
        category: "SOLIDARIDAD"
    },
    {
        text: "La recompensa de una buena acción está en haberla hecho.",
        author: "SÉNECA",
        category: "SOLIDARIDAD"
    },
    {
        text: "Ayuda a tus semejantes a levantar su carga, pero no te consideres obligado a llevársela.",
        author: "PITÁGORAS",
        category: "SOLIDARIDAD"
    },
    {
        text: "Si precisas una mano, recuerda que yo tengo dos.",
        author: "SAN AGUSTÍN",
        category: "SOLIDARIDAD"
    },
    {
        text: "No basta levantar al débil, hay que sostenerlo después.",
        author: "WILLIAM SHAKESPEARE",
        category: "SOLIDARIDAD"
    },
    {
        text: "Un grano no hace granero, pero ayuda a su compañero.",
        author: "REFRÁN",
        category: "SOLIDARIDAD"
    },
    {
        text: "Prestad auxilio si queréis hallarlo.",
        author: "FÉLIX MARÍA DE SAMANIEGO",
        category: "SOLIDARIDAD"
    },
    {
        text: "Nadie es inútil en este mundo mientras pueda aliviar un poco la carga a sus semejantes.",
        author: "CHARLES DICKENS",
        category: "SOLIDARIDAD"
    },
    {
        text: "El socorro en la necesidad, aunque sea poco, ayuda mucho.",
        author: "MATEO ALEMÁN",
        category: "SOLIDARIDAD"
    },
    {
        text: "Buscando el bien de nuestros semejantes, encontramos el nuestro.",
        author: "PLATÓN",
        category: "SOLIDARIDAD"
    },
    {
        text: "Si hacemos el bien por interés, seremos astutos, pero nunca buenos.",
        author: "CICERÓN",
        category: "SOLIDARIDAD"
    },
    {
        text: "Al bien hacer jamás le falta premio.",
        author: "CERVANTES",
        category: "SOLIDARIDAD"
    },
    {
        text: "Si tienes mucho, da mucho; si tienes poco, da poco: pero da siempre.",
        author: "ANÓNIMO",
        category: "SOLIDARIDAD"
    },
    
    // TECNOLOGÍA
    {
        text: "Cualquier tecnología suficientemente avanzada es indistinguible de la magia.",
        author: "ARTHUR C. CLARKE",
        category: "TECNOLOGÍA"
    },
    {
        text: "Un ordenador es para mí la herramienta más sorprendente que hayamos ideado. Es el equivalente a una bicicleta para nuestras mentes.",
        author: "STEVE JOBS",
        category: "TECNOLOGÍA"
    },
    
    // TRABAJO
    {
        text: "Lo que con mucho trabajo se adquiere, más se ama.",
        author: "ARISTÓTELES",
        category: "TRABAJO"
    },
    {
        text: "Dichoso es aquel que mantiene una profesión que coincide con su afición.",
        author: "GEORGE BERNAD SHAW",
        category: "TRABAJO"
    }
];

