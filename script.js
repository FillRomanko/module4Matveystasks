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

  //38
  const task38Buttons = document.querySelectorAll("[data-js='t38-buttons'] .btn[data-group-id]");
  const task38PickButton = document.querySelector("[data-js='t38-pick']");
  const task38Current = document.querySelector("[data-js='t38-current']");
  const task38Output = document.querySelector("[data-js='t38-out']");

  let task38CurrentGroupId = "britsp251";

  const updateTask38CurrentText = () => {
    const group = groupsData.groups.find((group) => group.id === task38CurrentGroupId);
    if (!group || !task38Current) return;
    task38Current.textContent = `Текущая группа: ${group.title}`;
    task38Output.textContent = "Студент: -";
  };

  if (task38Buttons.length > 0 && task38PickButton && task38Current && task38Output) {
    updateTask38CurrentText();

    task38Buttons.forEach((button) => {
      button.addEventListener("click", () => {
        task38CurrentGroupId = button.dataset.groupId;
        updateTask38CurrentText();
      });
    });

    task38PickButton.addEventListener("click", () => {
      const group = groupsData.groups.find((group) => group.id === task38CurrentGroupId);
      if (!group) return;

      const student = group.students[Math.floor(Math.random() * group.students.length)];
      task38Output.textContent = `Студент: ${student.name}`;
    });
  }

  //39
  const task39Buttons = document.querySelectorAll("[data-js='t39-buttons'] .btn");
  const task39Title = document.querySelector("[data-js='t39-title']");
  const task39Curator = document.querySelector("[data-js='t39-curator']");
  const task39List = document.querySelector("[data-js='t39-list']");

  if (task39Buttons.length > 0 && task39Title && task39Curator && task39List) {
    task39Buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const groupId = button.dataset.groupId;
        const group = groupsData.groups.find((group) => group.id === groupId);
        if (!group) return;

        if (!task39Title || !task39Curator || !task39List) return;

        task39Title.textContent = group.title;
        task39Curator.textContent = `Куратор: ${groupsData.curator}`;
        task39List.innerHTML = "";
        group.students.forEach((student) => {
          const li = document.createElement("li");
          li.textContent = student.name;
          task39List.append(li);
        });
      });
    });
  }

  //40
  const task40Buttons = document.querySelectorAll("[data-js='t40-buttons'] .btn");
  const task40Count = document.querySelector("[data-js='t40-count']");
  const task40List = document.querySelector("[data-js='t40-list']");

  let task40activeButton = task40Buttons[0];

  const renderTask40 = (groupId) => {
    if (!task40Count || !task40List) return;

    const group = groupsData.groups.find((group) => group.id === groupId);
    if (!group) return;

    task40Count.textContent = `Студентов: ${group.students.length}`;
    task40List.innerHTML = "";
    group.students.forEach((student) => {
      const li = document.createElement("li");
      li.textContent = student.name;
      task40List.append(li);
    });
  };

  if (task40Buttons.length > 0 && task40Count && task40List) {
    renderTask40("britsp251");

    task40Buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const groupId = button.dataset.groupId;
        renderTask40(groupId);
        task40activeButton.classList.remove('is-active');
        task40activeButton = button;
        task40activeButton.classList.add('is-active');
      });
    });
  }

  //41
  const task41Buttons = document.querySelectorAll("[data-js='t41-buttons'] .btn[data-group-id]");
  const task41RandomButton = document.querySelector("[data-js='t41-random']");
  const task41Count = document.querySelector("[data-js='t41-count']");
  const task41RandomOut = document.querySelector("[data-js='t41-random-out']");
  const task41Title = document.querySelector("[data-js='t41-title']");
  const task41Curator = document.querySelector("[data-js='t41-curator']");
  const task41List = document.querySelector("[data-js='t41-list']");

  let task41CurrentGroupId = "britsp251";
  let task41activeButton = task41Buttons[0];

  const renderTask41Card = (group) => {
    if (!task41Title || !task41Curator || !task41List) return;
    task41Title.textContent = group.title;
    task41Curator.textContent = `Куратор: ${groupsData.curator}`;
    task41List.innerHTML = "";
    group.students.forEach((student) => {
      const li = document.createElement("li");
      li.textContent = student.name;
      task41List.append(li);
    });
    task41RandomOut.innerHTML = "Студент: -";
  };

  const renderTask41 = (groupId) => {
    const group = groupsData.groups.find((group) => group.id === groupId);
    if (!group || !task41Count) return;

    task41CurrentGroupId = groupId;
    task41Count.textContent = `Студентов: ${group.students.length}`;
    renderTask41Card(group);
  };

  const pickTask41RandomStudent = () => {
    if (!task41RandomOut) return;

    const group = groupsData.groups.find((group) => group.id === task41CurrentGroupId);
    if (!group) return;

    const student = group.students[Math.floor(Math.random() * group.students.length)];
    task41RandomOut.textContent = `Студент: ${student.name}`;
  };

  if (task41Buttons.length > 0 && task41RandomButton && task41Count && task41RandomOut && task41Title && task41Curator && task41List) {
    renderTask41(task41CurrentGroupId);

    task41Buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const groupId = button.dataset.groupId;
        renderTask41(groupId);

        task41activeButton.classList.remove('is-active');
        task41activeButton = button;
        task41activeButton.classList.add('is-active');
      });
    });

    task41RandomButton.addEventListener("click", () => {
      pickTask41RandomStudent();
    });
  }
});
