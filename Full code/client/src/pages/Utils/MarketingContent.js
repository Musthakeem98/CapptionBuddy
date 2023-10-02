import React from 'react';

function MarketingContent({ data }) {
  return (
    <div>
      <h1>{data.Answer}</h1>

      <div>
        <h2>Description:</h2>
        <p>{data.Description}</p>
      </div>

      <div>
        <h2>Hooks:</h2>
        <ul>
            {data.Hooks && data.Hooks.map((hook, index) => (
            <li key={index}>{hook}</li>
            ))}
        </ul>
        </div>


      <div>
        <h2>Hashtags:</h2>
        <div>
            <h3>Keyword-focused:</h3>
            <ul>
                {data.Hashtags && data.Hashtags['Keyword-focused'] && data.Hashtags['Keyword-focused'].map((tag, index) => (
                <li key={index}>{tag}</li>
                ))}
            </ul>
            </div>

            <div>
  <h3>Service-based:</h3>
  <ul>
    {data.Hashtags && data.Hashtags['Service-based'] && data.Hashtags['Service-based'].map((tag, index) => (
      <li key={index}>{tag}</li>
    ))}
  </ul>
</div>


        <div>
        <h3>Mix of industry and keyword-focused:</h3>
        <ul>
            {data.Hashtags && data.Hashtags['Mix of industry and keyword-focused'] && data.Hashtags['Mix of industry and keyword-focused'].map((tag, index) => (
            <li key={index}>{tag}</li>
            ))}
        </ul>
        </div>

      </div>
    </div>
  );
}

export default MarketingContent;
