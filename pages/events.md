---
layout: Post
title: Events
permalink: /events
content-type: static
---

Here are the upcoming and past events. Click any event to view the landing page.

<ul>
{% for event in site.events %}
  <li style="margin-bottom: 0.75rem;">
    <a href="{{ event.url }}" style="font-weight: 600;">{{ event.title }}</a>
    {% if event.start_date %}
      – {{ event.start_date | date: "%B %-d, %Y" }}
    {% endif %}
  </li>
{% endfor %}
</ul>
