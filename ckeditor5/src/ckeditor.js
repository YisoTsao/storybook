/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import CKBox from '@ckeditor/ckeditor5-ckbox/src/ckbox.js';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import ImageInsert from '@ckeditor/ckeditor5-image/src/ImageInsert.js';
import AutoImage from '@ckeditor/ckeditor5-image/src/AutoImage.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import PictureEditing from '@ckeditor/ckeditor5-image/src/pictureediting.js';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js';
import ImportWord from '@ckeditor/ckeditor5-import-word/src/importword';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';

import CustomUploadAdapterPlugin from './ckeditorPlugin';
import { config } from './config';

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
  Autoformat,
  Alignment,
  BlockQuote,
  Bold,
  CKBox,
  CloudServices,
  Essentials,
  FontBackgroundColor,
  FontColor,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageResize,
  ImageToolbar,
  ImageUpload,
  ImageInsert,
  AutoImage,
  Indent,
  Italic,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  PictureEditing,
  SourceEditing,
  Table,
  TableToolbar,
  TextTransformation,
  Underline,
  Strikethrough,
  FontSize,
  HorizontalLine,
  ImportWord,
  RemoveFormat,
];

// Editor configuration.
Editor.defaultConfig = {
  extraPlugins: [CustomUploadAdapterPlugin],
  toolbar: {
    items: [
      'undo',
      'redo',
      '|',
      'ImportWord',
      'heading',
      '|',
      'fontColor',
      'fontBackgroundColor',
      'bold',
      'italic',
      'removeFormat',
      'fontSize',
      '|',
      'ImageInsert',
      'blockQuote',
      'insertTable',
      'mediaEmbed',
      '|',
      'strikethrough',
      'underline',
      'horizontalLine',
      'alignment',
      'bulletedList',
      'numberedList',
      'link',
      '|',
      'outdent',
      'indent',
      '|',
      'sourceEditing',
    ],
    shouldNotGroupWhenFull: true,
  },
  language: 'zh',
  fontColor: {
    ...config.fontColor,
  },
  fontBackgroundColor: {
    ...config.fontColor,
  },

  fontSize: {
    options: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 27, 29, 31, 33, 35],
  },
  alignment: {
    options: ['justify', 'left', 'center', 'right'],
  },
  image: {
    toolbar: [
      'imageStyle:alignLeft',
      'imageStyle:alignCenter',
      'imageStyle:alignRight',
      '|',
      'toggleImageCaption',
      'imageTextAlternative',
    ],
    resizeUnit: 'px',
  },
  mediaEmbed: {
    previewsInData: true,
  },
  list: {
    properties: {
      styles: true,
      startIndex: true,
      reversed: true,
    },
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableCellProperties',
      'tableProperties',
    ],
  },
};

export default Editor;
