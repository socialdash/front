# Основные

1. Апп в production никогда не должен крашиться. Вместо этого все exceptions должны обрабатываться, логгироваться и выдавать соотвествующие сообщения пользователю (там где это нужно). Если происходит что-то чего быть не должно (assert fail), то это логгируется как критическая ошибка, но апп все равно продолжает работать. Единственное исключение - это когда после эксепшна нельзя восстановить обратно апп в рабочее состояние, то такие случаи возникают в 0% случаев ). В development можно крашить, если так удобнее.

2. Компоненты должны быть типизированы, любое нарушение системы типов в рантайме логгируется.

3. Компоненты должны выдавать корректный UI при любой комбинации пропсов, которую допускает тип. Тип описывает только те значения, которые могут быть корректно отрендерены UI компонентом.  Если какие-то комбинации пропсов не работают, то это должно проверяться на уровне assert и задокументировано для компонента.

4. Любой компонент / экспортируемая функция должны быть документированы, кроме тех случаев когда использование компонента / функции очевидно. Для правильного использования компонента / функции должно быть достаточно только определения и документации, но не нужно заглядывать внутрь реализации.

5. Старайтесь использовать функциональный код (ramda) там где это возможно. Функциональный код менее подвержен ошибкам и более читабельный.

6. Любой код проходит ревью. Таким образом код с одной стороны проверяется, с другой - все участники проекта в курсе изменений.

7. Старайтесь делать небольшие фичи - их легче проверять и процесс их ревью не блочит реализацию других фич. Условный гайд - не более 500 строк полезного кода.

8. Javascript бандл должен быть как можно меньше, тк это улучшает User Experience и повышает сайт в ренкинге поисковиков. Поэтому можно использовать тяжелые либы только в том случае если они сильно облегчают жизнь и на них будет строиться костяк приложения. В целом решение о включении новой либы должно основываться на ее размере и ее полезности. Также не стоит подключать мелкие либы - тк они вносят дополнительные риски, при том что то же самое можно сделать внутри аппа, более хорошо заточенное под конкретно наш случай. Условный примеры "направильных" либ это разные стронние react компоненты не более 1000 строк кода.


# Рекомендации
## Redux
Старайтесь не использовать Redux, если возникнет острая необходимость, нужно обсудить это командой.
Проблемы могут возникнуть при заполнении стейта данными с Relay (дублирование заполнения на клиенте).