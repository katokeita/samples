---
layout: default
lang: ja
type: index
data: data
---








{% assign aaaa = site.html_pages | where: "name", 'test.md' %}
{% for pageTest in aaaa }} %}
    <div>{{ pageTest.path }}</div>
    <div>{{ pageTest.modified_time }}</div>
    <div>{{ pageTest.name | remove: ".md"}}</div>
    <div>{{ pageTest.basename }}</div>
    <div>{{ pageTest.extname }}</div>
{% endfor %}




{% include navi_learn.html %}

{% for learn in test.learn %}
<section class="">
    <h2><i class="{{ learn.icon }}"></i> {{ learn.title }}</h2>
    <ul class="content-list">
    {% for document in learn.documents %}
        <li class="content-item">
            <div class="content-card">
                <div class="content-header">
                    <h3 class="content-title">
                        <span class="content-type">Exastro EPOCH</span><br>
                        {{ document.title }}
                    </h3>
                </div>
                <div class="content-body">
                    <p class="content-paragraph">{{ document.description }}</p>
                </div>
                <div class="content-footer">
                    <ul class="content-link-list">
                    {% for link in document.links %}
                        <li class="content-link-item">
                            <a class="content-link" href="{{ link.url }}">
                                {{ link.title }} <i class="fas fa-angle-right"></i>
                            </a>
                        </li>
                    {% endfor %}
                    </ul>
                </div>
            </div>
        </li>
    {% endfor %}
    </ul>
</section>
{% endfor %}