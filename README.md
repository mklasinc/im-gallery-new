# IM Gallery
[Image gallery](http://gallery.nyuad.im/) showcasing work by Interactive Media students at NYU Abu Dhabi.
All the files now live on the [IM Website Github repo](https://github.com/NYUAD-IM/website/tree/master/gallery/data/projects) in the `gallery` folder. 

# Adding projects to the Gallery page
Here's the overview of the steps you should take to add new projects to the gallery page.
1. Fill out the Google Form with project data
2. Create project folder on your desktop
3. Copy project data from the form-populated Google Spreadsheet into the projects' `data.json` file.
4. Adding project folder to the [gallery data folder](https://github.com/NYUAD-IM/website/tree/master/gallery/data) on the IM Websites [github repo](https://github.com/NYUAD-IM/website/tree/master/gallery/data/projects)
5. Update `index.json` file in the gallery data folder

### 1. Filling out the Google Form
This should be easy

### 2. Creating project folder
The project folder will contain images and a json file with metadata related to your project. 

The folder should nest a `data.json` file and and `img` folder containing project's images to produce a folder structure shown below. You can clone this repository and use the `template` folder for that, or create the files and folders from scratch.
```
| - [my-project-folder-name]
| | - data.json
| | - img 
| | | - 01.png
| | | - 01.png
```
   
Use a descriptive folder name to make your job easier.
```
// bad folder name
my-project

// good
genetic-rhythms
```

### 3. Copying project data from the form-populated Google Spreadsheet into the projects' `data.json` file.
This will be harder than you expect. 
#### Short answer
You'll have to manually copy responses into the [json file](https://github.com/NYUAD-IM/website-panel/blob/master/docs/index.md#projects).
#### Long answer
Downloading the spreadsheet as a `.csv` file is problematic because the long project description will likely contain commas. On the other had, `.tsv` file will not work either because of spaces between words in form answers. Unfortunaley, Google Chrome does not support colon-delimited file downloads.
<br /><br />
Use the structure below to populate `data.json` file. `description.short` is a one-liner, whereas `description.long` should be a paragraph describing the project, its features and the underlying concept in more detail. **Important:** place all your images in the `img` folder. THe images should be placed in the order you want them to appear on the page. In addition, the first image in the array will always appear as the project’s thumbnail image. Since the tags section is used to build the nav bar on the gallery page, tag names matter a lot. It is highly encouraged you don't write tags yourself, but rather use those generated by the Google Form used for project submissions.
```json
{
    "title": "My Project Title",
    "authors":["author1","author2","author3"],
    "description":{
      "short":"My one line description",
      "long":"long description(1 paragraph, max 2)"
    },
    "website":"https://www.project-website.com",
    "images":["01.png","02.png","03.png"],
    "video":"https://vimeo.com/user12345",
    "tags":{
       "course":"Intro to IM",
       "semester":"Spring 2018",
       "tech":"Physical",
       "custom":["projection mapping","workshop"]
    }
}
```

### 4. Adding project folder to the gallery data folder
The project data folder can be found [here](https://github.com/NYUAD-IM/website/tree/master/gallery/data/projects). 

### 5. Updating `index.json` file
The index file is found [here](https://github.com/NYUAD-IM/website/tree/master/gallery/data). The file acts like a map for ajax queries used to populate the gallery page, so you have to include your project data in the `index.json` file to have the project featured on the gallery page. Below you can find the indexing template. **Important**: Image names in the `img` array should match actual images in the `img` folder. Simply add the the index object to the `index.json` file, and, as long as you a) configured the index file correctly, b) [set up the project folder structure](https://github.com/mklasinc/im-gallery-new/blob/master/README.md#2-creating-project-folder) correctly and c) placed the project folder in the [right place](https://github.com/NYUAD-IM/website/tree/master/gallery/data/projects), you should be fine.
```
{
  "title":"My project name",
  "folder_name":"project-folder-name",
  "img":["01.png"]
}
```




