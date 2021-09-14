

build:clean-dist
	ng build --baseHref="/" --outputPath="firebase/public" --prod=true

clean-dist:
	rm -rf dist/

deploy:
	cd firebase/; firebase deploy
