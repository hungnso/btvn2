class fAQ {
  $container;
  $questionContainer;
  $question;
  $contentQuestion;
  $icon;
  $answer;

  constructor(contentQuestion, contentAnswer) {
    this.$container = document.createElement("div");
    this.$container.classList.add("container");

    this.$questionContainer = document.createElement("div");
    this.$questionContainer.classList.add("question");

    this.$question = document.createElement("div");
    this.$question.classList.add("question-content");

    this.$contentQuestion = document.createElement("p");
    this.$contentQuestion.innerHTML = contentQuestion;

    this.$icon = document.createElement("i");
    this.$icon.classList.add("fas", "fa-plus-square", "icon");
    this.$icon.addEventListener("click", this.toggle);
    // this.$icon.innerHTML = icon;

    this.$answer = document.createElement("div");
    this.$answer.classList.add("answer");
    this.$answer.innerHTML = contentAnswer;
  }

  toggle = () => {
    this.$answer.classList.toggle("active");
    this.$icon.classList.toggle("fa-times");
  };

  render() {
    this.$question.appendChild(this.$contentQuestion);
    this.$question.appendChild(this.$icon);
    this.$questionContainer.appendChild(this.$question);
    this.$questionContainer.appendChild(this.$answer);
    this.$container.appendChild(this.$questionContainer);
    return this.$container;
  }
}
