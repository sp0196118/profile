await fetch(
  `https://api.github.com/repos/${owner}/${repo}/contents/config.js`,
  {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "Update portfolio",
      content: Buffer.from(newContent).toString("base64"),
      sha: currentSha
    })
  }
);
