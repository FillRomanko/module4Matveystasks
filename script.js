document.addEventListener("DOMContentLoaded", () => {
  // вот это лучше вам не трогать, внутри тултипов оставил подсказки к выполнению задач
  enableTooltips();

  // с этим обьектом вы будете работать
  const groupsData = {
    curator: "Глазунова",
    groups: [
      {
        id: "britsp251",
        title: "БРИЦП251",
        students: [
          { name: "Абеленцев Марк" },
          { name: "Бородин Александр" },
          { name: "Казазян Арина" },
          { name: "Карпив Полина" },
          { name: "Куренков Всеволод" },
          { name: "Ли Вадим" },
          { name: "Морунов Пётр" },
          { name: "Мосоровчук Анна" },
          { name: "Нечаев Валерий" },
          { name: "Николенко Софья" },
          { name: "Новикова Полина" },
          { name: "Олейник София" },
          { name: "Саблина Мария" },
          { name: "Смирнов Илья" },
          { name: "Смирнов Макар" },
          { name: "Тищенко Глафира" },
          { name: "Эверглен Мелани" },
        ],
      },
      {
        id: "britsp252",
        title: "БРИЦП252",
        students: [
          { name: "Белов Александр" },
          { name: "Борисова Виктория" },
          { name: "Бухарина Василиса" },
          { name: "Дегай Всеволод" },
          { name: "Исаев Артём" },
          { name: "Камнев Иван" },
          { name: "Колодяжный Степан" },
          { name: "Курпаяниди Эллина" },
          { name: "Куфаев Владислав" },
          { name: "Ломсадзе Олег" },
          { name: "Никифорова Елизавета" },
          { name: "Носкова Анастасия" },
          { name: "Пилипенко Дмитрий" },
          { name: "Салмин Пётр" },
          { name: "Степанова Софья" },
          { name: "Сукоркин Мирон" },
          { name: "Шамров Данил" },
          { name: "Этука Александр" },
        ],
      },
    ],
  };

  //35
  const task35Button = document.querySelector("[data-js='t35-show']");
  const task35List = document.querySelector("[data-js='t35-list']");

  if (task35Button && task35List){
    task35Button.addEventListener("click", () => {
      task35List.innerHTML = "";
      groupsData.groups.forEach((group) => {
        const li = document.createElement("li");
        li.textContent = group.title;
        task35List.appendChild(li);
      });
    });
  }

  //36
  const task36Buttons = document.querySelectorAll("[data-js='t36-buttons'] .btn");
  const task36List = document.querySelector("[data-js='t36-list']");

  if (task36Buttons.length > 0 && task36List){
    task36Buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const groupId = button.dataset.groupId;
        const group = groupsData.groups.find((group) => group.id === groupId);

        if (!group) return;

        task36List.innerHTML = "";
        group.students.forEach((student) => {
          const li = document.createElement("li");
          li.textContent = student.name;
          task36List.append(li);
        });
      })
    })
  }

  //37
  const task37Buttons = document.querySelectorAll("[data-js='t37-buttons'] .btn");
  const task37Output = document.querySelector("[data-js='t37-out']");

  if (task37Buttons.length > 0 && task37Output) {
    task37Buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const groupId = button.dataset.groupId;
        const group = groupsData.groups.find((group) => group.id === groupId);
        if (!group) return;

        task37Output.textContent = `Студентов: ${group.students.length}`;
      });
    });
  }
});
