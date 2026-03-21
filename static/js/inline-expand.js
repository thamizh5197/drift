(function () {
  'use strict';

  // Tag filtering on homepage
  const tagFilters = document.querySelectorAll('.tag-filter');
  const articleItems = document.querySelectorAll('.article-item');

  if (tagFilters.length) {
    let activeTag = null;

    tagFilters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const tag = btn.dataset.tag;

        if (activeTag === tag) {
          activeTag = null;
          tagFilters.forEach(function (b) { b.classList.remove('active'); });
          articleItems.forEach(function (a) { a.classList.remove('hidden'); });
        } else {
          activeTag = tag;
          tagFilters.forEach(function (b) {
            b.classList.toggle('active', b.dataset.tag === tag);
          });
          articleItems.forEach(function (a) {
            const tags = a.dataset.tags ? a.dataset.tags.split(',') : [];
            a.classList.toggle('hidden', !tags.includes(tag));
          });
        }
      });
    });
  }

  // Inline article expansion
  document.addEventListener('click', async function (e) {
    const link = e.target.closest('.article-body a[href]');
    if (!link) return;

    const href = link.getAttribute('href');
    // Only handle internal /articles/ links
    if (!href || !href.match(/^\/articles\/[^/]+\/?$/)) return;

    e.preventDefault();

    // Toggle existing expansion
    const existing = link.parentElement.nextElementSibling;
    if (existing && existing.classList.contains('inline-expansion')) {
      existing.remove();
      return;
    }

    // Fetch JSON for the linked article
    const jsonUrl = href.replace(/\/$/, '') + '/index.json';

    try {
      const response = await fetch(jsonUrl);
      if (!response.ok) throw new Error('not found');
      const data = await response.json();

      const expansion = document.createElement('div');
      expansion.classList.add('inline-expansion');
      expansion.innerHTML =
        '<div class="inline-expansion-header">' +
          '<span class="inline-expansion-title">' + escapeHtml(data.title) + '</span>' +
          '<button class="inline-expansion-close" aria-label="Close">×</button>' +
        '</div>' +
        '<div class="inline-expansion-content">' + data.content + '</div>';

      const para = link.closest('p') || link.parentElement;
      para.after(expansion);

      expansion.querySelector('.inline-expansion-close').addEventListener('click', function () {
        expansion.remove();
      });
    } catch (_) {
      // Fall back to normal navigation
      window.location.href = href;
    }
  });

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
})();
