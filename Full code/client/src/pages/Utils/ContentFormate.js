import React from 'react';

const FormattedContent = ({ data }) => {
  // Split the data into sections: Description, Hooks, and Hashtags
  const sections = data.split('Hooks: ');

  // Separate the Hooks section
  const hooksSection = sections[1];
  const [description, ...hooks] = sections[0].split('\n');

  // Split the Hashtags section into categories
  const [keywordFocused, industryFocused, mixFocused, serviceBased] = hooksSection.split('\n');

  return (
    <div>
      <div>
        <span role="img" aria-label="Description">🤩</span> {description}
      </div>
      <div>
        <strong>Hooks:</strong>
        <ul>
          {hooks.map((hook, index) => (
            <li key={index}>
              <span role="img" aria-label="Hook">🤩</span> {hook.trim()}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Hashtags:</strong>
        <ul>
          <li>
            <strong>Keyword-focused:</strong>
            <ul>
              {keywordFocused.split(' ').map((keyword, index) => (
                <li key={index}>- {keyword}</li>
              ))}
            </ul>
          </li>
          <li>
            <strong>Industry-focused:</strong>
            <ul>
              {industryFocused.split(' ').map((industry, index) => (
                <li key={index}>- {industry}</li>
              ))}
            </ul>
          </li>
          <li>
            <strong>Mix of industry and keyword-focused:</strong>
            <ul>
              {mixFocused.split(' ').map((mix, index) => (
                <li key={index}>- {mix}</li>
              ))}
            </ul>
          </li>
          <li>
            <strong>Service-based:</strong>
            <ul>
              {serviceBased.split(' ').map((service, index) => (
                <li key={index}>- {service}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FormattedContent;
