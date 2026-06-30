function searchWord() {

    let word = document.getElementById("wordInput").value.toLowerCase();

    let result = document.getElementById("result");

    if (word == "happy") {
        result.innerHTML =
        "<h2>😊 Happy</h2>" +
        "<p><b>Meaning:</b> Feeling or showing pleasure.</p>" +
        "<p><b>Example:</b> She was happy after winning the prize.</p>";
    }

    else if (word == "book") {
        result.innerHTML =
        "<h2>📚 Book</h2>" +
        "<p><b>Meaning:</b> A set of written or printed pages.</p>" +
        "<p><b>Example:</b> I bought a new book yesterday.</p>";
    }

    else if (word == "apple") {
        result.innerHTML =
        "<h2>🍎 Apple</h2>" +
        "<p><b>Meaning:</b> A sweet fruit.</p>" +
        "<p><b>Example:</b> An apple a day keeps the doctor away.</p>";
    }

    else {
        result.innerHTML =
        "<h2>❌ Word Not Found</h2>";
    }

}