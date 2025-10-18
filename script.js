class ProfileCard {
    _parentElement = document.querySelector(".habits-container");

    constructor() {
        this._curDateInSecs();
        this._addHandlerHabits();
    }

    _curDateInSecs() {
        const displayCurDate = document.querySelector(".cur-date");

        setInterval(() => {
            const now = Date.now();
            displayCurDate.textContent = now;
        }, 1000);
    }

    _addHandlerHabits() {
        this._parentElement.addEventListener("click", (e) => {
            const hobbiesBtn = e.target.closest("#hobbies-button");
            const dislikesBtn = e.target.closest("#dislikes-button");

            if (hobbiesBtn) this._toggleBtn("hobbies");
            if (dislikesBtn) this._toggleBtn("dislikes");
        });
    }

    _toggleBtn(type) {
        const hobbiesList = document.querySelector(".hobbies-list");
        const dislikesList = document.querySelector(".dislike-list");
        const container = document.querySelector(".hobbies-dislikes-container");
        const hobbiesBtn = document.querySelector("#hobbies-button");
        const dislikesBtn = document.querySelector("#dislikes-button");
        const hobbiesIcon = hobbiesBtn.querySelector("img");
        const dislikesIcon = dislikesBtn.querySelector("img");

        const isHobbiesOpen = !hobbiesList.classList.contains("hidden");
        const isDislikesOpen = !dislikesList.classList.contains("hidden");

        hobbiesList.classList.add("hidden");
        dislikesList.classList.add("hidden");
        hobbiesBtn.classList.remove("btn-active");
        dislikesBtn.classList.remove("btn-active");
        hobbiesIcon.src = "svg/eye-svgrepo-com.svg";
        dislikesIcon.src = "svg/eye-svgrepo-com.svg";
        hobbiesBtn.disabled = false;
        dislikesBtn.disabled = false;

        if ((type === "hobbies" && isHobbiesOpen) || (type === "dislikes" && isDislikesOpen)) {
            container.classList.remove("height-10");
            return;
        }

        if (type === "hobbies") {
            hobbiesList.classList.remove("hidden");
            hobbiesBtn.classList.add("btn-active");
            hobbiesIcon.src = "svg/eye-slash-svgrepo-com.svg";
            dislikesBtn.disabled = true;
        }

        if (type === "dislikes") {
            dislikesList.classList.remove("hidden");
            dislikesBtn.classList.add("btn-active");
            dislikesIcon.src = "svg/eye-slash-svgrepo-com.svg";
            hobbiesBtn.disabled = true;
        }

        container.classList.toggle(
            "height-10",
            !hobbiesList.classList.contains("hidden") || !dislikesList.classList.contains("hidden")
        );
    }
}

new ProfileCard();
