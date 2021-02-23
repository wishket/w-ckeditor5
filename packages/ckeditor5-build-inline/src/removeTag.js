
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Command from '@ckeditor/ckeditor5-core/src/command';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import first from '@ckeditor/ckeditor5-utils/src/first';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph'
import removeFormatIcon from "../../ckeditor5-remove-format/theme/icons/remove-format.svg";

const REMOVE_TAG = 'removeTag';

export default class RemoveTag extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ RemoveTagEditing, RemoveTagUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'RemoveTag';
	}
}



class RemoveTagCommand extends Command {
	/**
	 * @inheritDoc
	 */
	refresh() {
		const model = this.editor.model;
		this.isOn = true;
		this.isEnabled = true;
	}

	/**
	 * @inheritDoc
	 */
	execute() {
		var items = [];
		var html = '';
		var body = '';
		const model = this.editor.model;
		const schema = model.schema;
		model.change(writer => {
			for ( const curRange of model.document.selection.getRanges() ) {
				for ( const item of curRange.getItems() ) {
					if (item.data != 'undefined' && item.data != undefined) {
						body += item.data;
					} else if (item.data == undefined) {
						items.push(body)
						body = ''
					}

				}
				if(body != '' && body != undefined) {
					items.push(body)
				}
				writer.remove(curRange)
			}
			for(var i=0; i < items.length; i++) {
				if (items[i] != undefined && items[i] != 'undefined' && items[i] != '') {
					html += '<p>' + items[i] + '</p>'
				}
			}
			const viewFragment = this.editor.data.processor.toView(html);
			const modelFragment = this.editor.data.toModel(viewFragment);
			this.editor.model.insertContent(modelFragment)
		})


	}
}

class RemoveTagEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'RemoveTagEditing';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;

		editor.commands.add( 'removeTag', new RemoveTagCommand( editor ) );
	}
}

class RemoveTagUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'RemoveTagUI';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		const t = editor.t;

		editor.ui.componentFactory.add( REMOVE_TAG, locale => {
			const command = editor.commands.get( REMOVE_TAG );
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Remove Tag' ),
				icon: removeFormatIcon,
				tooltip: true
			} );

			// Execute the command.
			this.listenTo( view, 'execute', () => {
				editor.execute( REMOVE_TAG );
				editor.editing.view.focus();
			} );

			return view;
		} );
	}
}
