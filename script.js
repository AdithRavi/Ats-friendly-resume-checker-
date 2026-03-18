function runATSCheck() {
    const resume = document.getElementById('resumeText').value.toLowerCase();
    const jd = document.getElementById('jdText').value.toLowerCase();
    
    if (!resume || !jd) {
        alert("Please paste both your resume and the job description.");
        return;
    }

    // 1. Identify important keywords from Job Description
    // In a real MNC tool, this would use a complex dictionary
    const importantTerms = ["mechanical", "engineering", "python", "data", "ux", "research", "solidworks", "cad", "analytics", "communication", "design"];
    
    let matched = [];
    let missing = [];

    importantTerms.forEach(word => {
        if (jd.includes(word)) {
            if (resume.includes(word)) {
                matched.push(word);
            } else {
                missing.push(word);
            }
        }
    });

    // 2. Calculate Score
    const totalPossible = matched.length + missing.length;
    const score = totalPossible > 0 ? Math.round((matched.length / totalPossible) * 100) : 0;

    // 3. Display Results
    document.getElementById('resultArea').style.display = 'flex';
    document.getElementById('scoreNum').innerText = score;
    
    const missingDiv = document.getElementById('missingKeywords');
    missingDiv.innerHTML = missing.map(word => `<span class="tag">${word}</span>`).join('');
}
