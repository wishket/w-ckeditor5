
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Command from '@ckeditor/ckeditor5-core/src/command';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
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
		const model = this.editor.model;
		const schema = model.schema;
		console.log(model.document.selection)
		model.change(writer => {
			for ( const item of this._getFormattingItems( model.document.selection, schema ) ) {
				if(schema.isBlock( item )) {
					console.log(item)
				}
			}
		})
	}

	* _getFormattingItems( selection, schema ) {
		// Check formatting on selected items that are not blocks.
		for ( const block of selection.getSelectedBlocks() ) {
			if ( itemHasRemovableFormatting( block ) ) {
				yield block;
			}
		}
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
