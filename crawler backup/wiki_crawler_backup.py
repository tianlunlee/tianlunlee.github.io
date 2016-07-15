import urllib2
from urlparse import urlparse

#initializes a dictionary to store links and an integer that enables a number-based naming fashion
global all_links
all_links = {}
global naming_num
naming_num = 0

class Crawler(object):
    '''this class holds functions that enables the creation of a dictionary that holds links of wikipedia articles'''

    def __init__(self, url):
        self.url = url
        self.html = urllib2.urlopen(self.url).read()
        self.url_parse = urlparse(self.url)

    def fetch_html(self):
        return self.html

    def get_title(self, html):
        #retrieves the title of the page
        title = ''
        title_start = self.html.find('<title>')
        title_end = self.html.find('</title>')
        title = self.html[title_start + 7:title_end]
        return title

    def get_wiki_links(self, html):
        links = []
        base_link = 'en.wikipedia.org/wiki/'
        # ensure the crawl starts at the beginning and doesn't continually restart from the beginning
        link_start = 0
        link_end = 0
        for str_index in range(len(self.html)):
            link_start = self.html.find('<a href="/wiki/', link_end) + 15 #link_end enables the progression
            link_end = self.html.find('" ', link_start)
            links.append(base_link + self.html[link_start:link_end])


    # naming_num += 1

        return links

# def get_google_links(html):
#     links = []
#     a_index = 0
#     link_start = 0
#     link_end = 0
#
#     a_index = html.find('<a', link_end) #finds a tags
#     link_start = html.find('href="', a_index) + 6
#     link_end = html.find('" ', link_start)
#
#     links.append(html[link_start:link_end])
#
#     return links
#
url = 'https://en.wikipedia.org/'

# urls = [
#     'https://en.wikipedia.org/', 'https://www.google.com'
# ]

# print get_google_links(fetch_html(urls[1]))
wiki = Crawler(url)
wiki_html = wiki.fetch_html()
wiki_links = wiki.get_wiki_links(wiki_html)
print wiki_links



# fetch the <a href="/wiki/..."
# use the end index to start the next fetch
# use a for loop that ends at the len(html)

# url = 'https://www.google.com/'
#
# html = urllib2.urlopen(url).read()
#
# print html



# for url in urls:
#     html = fetch_html(url)
#     print get_title(html)
