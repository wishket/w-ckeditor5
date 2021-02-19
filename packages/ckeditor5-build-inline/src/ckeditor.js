/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import WordCount from "@ckeditor/ckeditor5-word-count/src/wordcount";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import SpecialCharactersText from "@ckeditor/ckeditor5-special-characters/src/specialcharacterstext";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import SpecialCharactersLatin from "@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin";
import SpecialCharactersArrows from "@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows";
import PageBreak from "@ckeditor/ckeditor5-page-break/src/pagebreak";
import MediaEmbedToolbar from "@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar";
import LinkImage from "@ckeditor/ckeditor5-link/src/linkimage";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert";
import HtmlEmbed from "@ckeditor/ckeditor5-html-embed/src/htmlembed";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor";
import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code";
import CKFinderUploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import AutoImage from "@ckeditor/ckeditor5-image/src/autoimage";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import ListStyle from "@ckeditor/ckeditor5-list/src/liststyle";
import SpecialCharacters from "@ckeditor/ckeditor5-special-characters/src/specialcharacters";
import SpecialCharactersCurrency from "@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency";
import SpecialCharactersEssentials from "@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials"
import SpecialCharactersMathematical from "@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical"
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import wRemoveTag from "../../w-ckeditor5-remove-tag/src/removetag"


export default class InlineEditor extends InlineEditorBase {}

// Plugins to include in the build.
InlineEditor.builtinPlugins = [
	Alignment,
	AutoImage,
	Autoformat,
	BlockQuote,
	Bold,
	CKFinder,
	CKFinderUploadAdapter,
	Code,
	CodeBlock,
	Essentials,
	FontBackgroundColor,
	FontColor,
	FontSize,
	Heading,
	Highlight,
	HorizontalLine,
	HtmlEmbed,
	Image,
	ImageCaption,
	ImageInsert,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	ListStyle,
	MediaEmbed,
	MediaEmbedToolbar,
	PageBreak,
	Paragraph,
	PasteFromOffice,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Table,
	TableCellProperties,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Underline,
	WordCount,

	wRemoveTag
];

// Editor configuration.
InlineEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'alignment',
			'indent',
			'outdent',
			'|',
			'specialCharacters',
			'blockQuote',
			'imageInsert',
			'mediaEmbed',
			'insertTable',
			'|',
			'wRemoveTag',
			'undo',
			'redo',
			'|',
			'code',
			'codeBlock',
			'|',
			'horizontalLine',
			'pageBreak',
			'|',
			'htmlEmbed'
		]
	},
	image: {
		resizeOptions: [
			{
				name: 'imageResize:original',
				value: '100',
				icon: 'original'
			},
			{
				name: 'imageResize:50',
				value: '50',
				icon: 'small'
			},
			{
				name: 'imageResize:60',
				value: '60',
				icon: 'medium'
			},
			{
				name: 'imageResize:80',
				value: '80',
				icon: 'large'
			},
		],
		toolbar: [
			'imageTextAlternative',
			'imageStyle:full',
			'imageStyle:side',
			'imageResize:50',
			'imageResize:60',
			'imageResize:80',
			'imageResize:original'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableCellProperties',
			'tableProperties'
		]
	},
	indentBlock: {
		offset: 20,
		unit: 'px'
	},
	fontColor: {
		colors: [
			{color: '#FFFFFF', label: 'white'},
			{color: '#292929', label: 'black'},
			{color: '#757575', label: 'dark gray'},
			{color: '#999999', label: 'gray'},
			{color: '#e52929', label: 'red'},
			{color: '#ff6b21', label: 'orange'},
			{color: '#ffc61c', label: 'yellow'},
			{color: '#00a878', label: 'partner'},
			{color: '#2e6baa', label: 'client'},
			{color: '#3ba3c7', label: 'wishket'},
		]
	},
	fontBackgroundColor: {
		colors: [
			{color: '#FFFFFF', label: 'white'},
			{color: '#292929', label: 'black'},
			{color: '#757575', label: 'dark gray'},
			{color: '#999999', label: 'gray'},
			{color: '#e52929', label: 'red'},
			{color: '#ff6b21', label: 'orange'},
			{color: '#ffc61c', label: 'yellow'},
			{color: '#00a878', label: 'partner'},
			{color: '#2e6baa', label: 'client'},
			{color: '#3ba3c7', label: 'wishket'},
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
