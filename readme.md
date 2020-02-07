##### antd-lazyload
- download:
```javascript
npm i antd-lazyload --save
```
- After downloading antd-lazyload, copy the components and css files in the folder to the project's src folder (or the components folder under src), so you can use it.
- 下载antd-lazyload之后复制文件夹里的组件和css文件到项目的src文件夹下面（或者src下的components文件夹里），这样就可以使用了
- `If you did not download antd`, Use as follows:
- `如果没有下载antd`，请按以下方式使用：
```javascript
import LazyLoad from '...'
// Use as a component
<LazyLoad 
    state={{
        src: 'http://example.com/1.jpg',
        alt: '1.jpg',
        BoxClassName: 'example-box',
        ImgClassName: 'example-img'
    }}
></LazyLoad>
```
- `If you downloaded antd`, Use as follows:
- `如果您下载了antd`，请按以下方式使用：
```javascript
import AntdLazyLoad from '...'
// Use as a component
<AntdLazyLoad 
    state={{
        src: 'http://example.com/1.jpg',
        alt: '1.jpg',
        BoxClassName: 'example-box',
        ImgClassName: 'example-img'
    }}
></AntdLazyLoad>
```
- There is also a component antdload, this component is not a lazy loading component, but it works well when the number of loaded images is not large, If you want to use the component antdload, Use as follows:
```javascript
import AntdLoad from '...'
// Use as a component
<AntdLaod 
    state={{
        src: 'http://example.com/1.jpg',
        alt: '1.jpg',
        BoxClassName: 'example-box',
        ImgClassName: 'example-img'
    }}
></AntdLoad>
```
- Passing parameters to component through `state`
- 通过`state`将参数传递给组件
<table>
    <tr>
        <th>param</th>
        <th>attributes</th>
        <th>defaultValue</th>
        <th>description</th>
    </tr>
    <tr>
        <td rowspan='8'>state</td>
        <td>src</td>
        <td></td>
        <td>The address of the image that needs to be lazy loaded</td>
    </tr>
    <tr>
        <td>alt</td>
        <td>antd-lazyload</td>
        <td>alt of img</td>
    </tr>
    <tr>
        <td>width</td>
        <td></td>
        <td>Container width (容器的宽度)</td>
    </tr>
    <tr>
        <td>height</td>
        <td></td>
        <td>Container height (容器的高度)</td>
    </tr>
    <tr>
        <td>BoxClassName</td>
        <td>lazyload-img-box</td>
        <td>Container class name (容器的类名)</td>
    </tr>
    <tr>
        <td>BoxStyle</td>
        <td></td>
        <td>Container styles (容器的样式)</td>
    </tr>
    <tr>
        <td>ImgClassName</td>
        <td>lazyload-img</td>
        <td>Image class name (img标签的类名)</td>
    </tr>
    <tr>
        <td>ImgStyle</td>
        <td></td>
        <td>Image styles (img标签的样式)</td>
    </tr>
</table>