/**
 * 
 * План вводного урока
 * 
 * 1. Рассказать про javаscript и небольшую историю
 * 2. Что такое стандарт EcmaScript
 * 3. Продемонстрировать возможности js в браузере, рассказать про среды
*/

/**
 * 
 * Всем привет! В этом уроке я расскажу небольшую историю создания языка Javascript, о том какая мотивация была у мира веб технологий к появлению этого языка
 * Также расскажу про общий стандарт EcmaScript, про версии языка, как следить за его обновлениями, про поддержку браузерами и что вообще обычно входит в обновление языка javascript
 * И в конце я продемонстрирую небольшие возможности которые есть у языка javascript для того, чтобы у вас окончательно сформировалось понимание
 * что такое язык javascript и какими навыками вы будете владеть по итогам курса
*/

/**
 * История создания языка
 * 
 * Javascript появился в 90 годах, во времена появления браузера netscape
 * Так как в те времена веб был статичным, у разработчиков браузеров было видение
 * сделать веб более динамичным и интерактивным. Необходим был инструмент, который мог бы
 * динамично получать доступ к объектной модели документа, и свободно вносить в него изменения
 * тем самым добавляя интерактивности, динамичности и гибкости страницам.
 * При этом идея была еще в том, чтобы создать язык, доступный не только разработчикам имеющим опыт
 * в computer science и инженерии. Он должен быть более простым и доступным для людей ориентированных на создании
 * интерфейсов, основными из которых были дизайнеры, Таким образом был создан язык Mocha7
 * 
 * В последствии Mocha был переименован в LiveScript а затем в JavaScript.
 * 
 * В то время netscape был наиболее предпочтительным браузером. Но параллельно вместе с ним
 * разрабатывались другие браузеры, в частности internet explorer от microsoft.
 * 
 * Основная проблема была в том, что в своей основе эти браузеры имели разные технологии.
 * Javascript очень быстро развивался, добавлялся новый функционал. И со стороны майкрософт было принято решение
 * о создании собственной версии языка javascript, под названием JScript. Да, все что они сделали это убрали Java
 * чтобы не было проблем с товарным знаком.
 * 
*/

/**
 * Про EcmaScript
 * 
 * Что вообще такое EcmaScript? Мы тут вроде бы javascript собрались изучать а еще какой-то EcmaScript появился.
 * 
 * EcmaScript определяет стандарт языка JavaScript. Что это значит? Некоторая группа людей называющих себя Ecma International
 * решила что необходимо стандартиизировать язык и определить его основную функциональность. Для простоты понимания, можно рассматривать
 * версии EcmaScript как способ указания на версию языка. Точно также как есть версии языка джава. При указании версии
 * языка javascript мы не говорим javascript5, 6 7 и тд. Мы указываем на версию стандарта ecmascript.
 * 
 * Сделано все это было для того чтобы объединить разные реализации javascript во многих браузерах и сделать
 * кроссбраузерную разработку более доступной.
 * 
 * На данный момент версией языка, которая поддерживается во всех современных браузерах является EcmaScript5, которая появилась
 * в 2009 году. Это значит что возможности которые определяются этой версией мы можем использовать прямо в браузере
 * 
 * Одни из них...
 * 
 * Но EcmaScript переодически обновляется, в него добавляются новые возможности, которые в значительной степени упрощают написание кода.
 * Что обычно входит в обновление стандарта?
 * В обновление могут входить новые методы при работе с различными типами данных. Для примера в EcmaScript2016 был добавлен метод includes, который позволял одной строкой
 * проверять, содержит ли массив указанные значения. До этого приходилось писать свои реализации. Также в новых версиях могут появляться новые типы данных, которых не хватало.
 * Так например в стандарте версии 11 2020 года появился тип данных BigInt для работы с большими числами
 * 
 * На момент создания курса последней доступной версией является EcmaScript12 датированный 2021 годом. У EcmaScript есть свой репозиторий
 * с открытым исходным кодом. Тут можно следить за доступными обновлениями языка. Также более подробное описание можно смотреть на официальном сайте стандарата Ecmascript
*/

/**
 * Что мы будем учить?
 * 
 * Нужно понимать, что EcmaScript не является языком в нашем понимании. Это просто версии. Учить мы будем с вами именно Javascript
*/