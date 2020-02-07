##### antd-lazyload
- download:
```javascript
npm i antd-lazyload --save
```
- `If you did not download antd`,Use as follows:
```javascript
import LazyLoad from 'antd-lazyload/lazyload'
// Use as a component
<LazyLoad 
    state={{
        src: 'http://example.com/1.jpg',
        alt: '1.jpg'
    }}
></LazyLoad>
```
- `If you downloaded antd`,Use as follows:
```javascript
import AntdLazyLoad from 'antd-lazyload'
// Use as a component
<AntdLazyLoad 
    state={{
        src: 'http://example.com/1.jpg',
        alt: '1.jpg'
    }}
></AntdLazyLoad>
```
- Passing parameters to component through `state`
<table>
    <tr>
        <th>param</th>
        <th>attributes</th>
        <th>defaultValue</th>
        <th>description</th>
    </tr>
    <tr>
        <td rowspan='6'>state</td>
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
        <td>BoxClassName</td>
        <td>lazyload-img-box</td>
        <td>Container class name</td>
    </tr>
    <tr>
        <td>BoxStyle</td>
        <td></td>
        <td>Container styles</td>
    </tr>
    <tr>
        <td>ImgClassName</td>
        <td>lazyload-img</td>
        <td>Image class name</td>
    </tr>
    <tr>
        <td>ImgStyle</td>
        <td></td>
        <td>Image styles</td>
    </tr>
</table>