document.addEventListener('DOMContentLoaded', function () {
    const contributionsList = document.getElementById('contributionsList');

    const newContribution = {
      title: 'Quantum Mechanics',
      description: 'Einstein made significant contributions to the development of quantum mechanics',
    };

    const newListItem = document.createElement('li');
    newListItem.innerHTML = `
      <h3>${newContribution.title}</h3>
      <p>${newContribution.description}</p>
    `;

    contributionsList.appendChild(newListItem);
  });
