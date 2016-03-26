var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
<head>
    <style>
      .main {
        background-color: #2196F3;
      }
    </style>
</head>
  <listTemplate class="main">
    <banner>
      <background>
        <img src="${this.BASEURL}resources/banner.png" width="1920" height="360" />
      </background>
    </banner>
    <list>
      <section>
        <header>
          <title>tvOS Tutorials</title>
        </header>
        <listItemLockup vidUrl="https://s3-us-west-2.amazonaws.com/devslopesvideo/tvOS-xcode-font-size.mp4">
          <title>Xcode Font Sizing</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/xcode-font-icon.png" width="857" height="482" />
              <title>Dynamically Changing Xcode Font Size</title>
              <subtitle>Works on Xcode 7 and Beta</subtitle>
              <description>A lot of people have asked me how I shrink and grow font sizes in Xcode on the fly. Well now you will learn how to do it too!</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup vidUrl="https://s3-us-west-2.amazonaws.com/devslopesvideo/tvOS-custom-view-focus.mp4">
          <title>tvOS Custom View Focus</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/custom-view-focus.png" width="857" height="482" />
              <title>How to Get Any View to Focus</title>
              <description>By default tvOS will focus UITableViewCell, UICollectionViewCell, and UIButtons, but did you know you can create your own custom UIView that can receive focus from the focus engine?</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup vidUrl="https://s3-us-west-2.amazonaws.com/devslopesvideo/app-icon-photoshop.mp4">
          <title>tvOS App Icon</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/photoshop-app-icon.png" width="857" height="482" />
              <title>How to make a tvOS app icon</title>
              <subtitle>With 3D Effects!</subtitle>
              <description>New with tvOS comes the ability to make parallax app icons that give the user a sense of depth. In this video we learn how to make these awesome icons!</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
      </section>
    </list>
  </listTemplate>
</document>`
}
