# rubycorns.club
The home of the rubycorns.club website

## deployment
To deploy the website you need ssh access to the rubycorns uberspace. Nudge Lisa to give you access and the path to the git repo.

Add the another remote like so:
`$ git remote add uberspace <path that Lisa gives you>`

All that's left to do is commit your changes and push to the remote:
`$ git push uberspace`

Once you push to the uberspace remote, jekyll will automatically create a new build of the website.

Done.
