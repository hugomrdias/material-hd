import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import './../src/normalize.css';
import './../src/variables.css';
import './../src/base.css';

storiesOf('Base', module)
    .add('Heading and Paragraph', () => (
        <div>
            <h1>
                H1 Heading <small>40px</small>
            </h1>
            <h2>
                H2 Heading <small>32px</small>
            </h2>
            <h3>
                H3 Heading <small>28px</small>
            </h3>
            <h4>
                H4 Heading <small>24px</small>
            </h4>
            <h5>
                H5 Heading <small>20px</small>
            </h5>
            <h6>
                H6 Heading <small>16px</small>
            </h6>
            <h4>Paragraphs</h4>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur{' '}
                    <a href="#typography">
                        adipiscing elit. Praesent risus leo, dictum in vehicula
                        sit amet
                    </a>, feugiat tempus tellus. Duis quis sodales risus. Etiam
                    euismod ornare consequat.
                </p>
                <p>
                    Climb leg rub face on everything give attitude nap all day
                    for under the bed. Chase mice attack feet but rub face on
                    everything hopped up on goofballs.
                </p>
            </div>
        </div>
    ))
    .add('Semantic text elements', () => (
        <div>
            <h4>Semantic text elements</h4>
            <div>
                <div>
                    <abbr title="Internationalization">I18N</abbr>
                    <code>&lt;abbr&gt;</code>
                </div>
                <div>
                    <strong>Bold</strong>
                    <code>&lt;strong&gt;</code> <code>&lt;b&gt;</code>
                </div>
                <div>
                    <cite>Citation</cite>
                    <code>&lt;cite&gt;</code>
                </div>
                <div>
                    <code>Hello World!</code>
                    <code>&lt;code&gt;</code>
                </div>
                <div>
                    <del>Deleted</del>
                    <code>&lt;del&gt;</code>
                </div>
                <div>
                    <em>Emphasis</em>
                    <code>&lt;em&gt;</code>
                </div>
                <div>
                    <i>Italic</i>
                    <code>&lt;i&gt;</code>
                </div>
                <div>
                    <ins>Inserted</ins>
                    <code>&lt;ins&gt;</code>
                </div>
                <div>
                    <kbd>Ctrl + S</kbd>
                    <code>&lt;kbd&gt;</code>
                </div>
                <div>
                    <mark>Highlighted</mark>
                    <code>&lt;mark&gt;</code>
                </div>
                <div>
                    <ruby>
                        漢 <rt>kan</rt>
                        字 <rt>ji</rt>
                    </ruby>
                    <code>&lt;ruby&gt;</code>
                </div>
                <div>
                    <s>Strikethrough</s>
                    <code>&lt;s&gt;</code>
                </div>
                <div>
                    <samp>Sample</samp>
                    <code>&lt;samp&gt;</code>
                </div>
                <div>
                    Text <sub>Subscripted</sub>
                    <code>&lt;sub&gt;</code>
                </div>
                <div>
                    Text <sup>Superscripted</sup>
                    <code>&lt;sup&gt;</code>
                </div>
                <div>
                    <time>20:00</time>
                    <code>&lt;time&gt;</code>
                </div>
                <div>
                    <u>Underline</u>
                    <code>&lt;u&gt;</code>
                </div>
                <div>
                    <var>x</var> = <var>y</var> + 2
                    <code>&lt;var&gt;</code>
                </div>
            </div>
        </div>
    ))
    .add('Blockquote', () => (
        <blockquote>
            <p>
                The advance of technology is based on making it fit in so that
                you don't really even notice it, so it's part of everyday life.{' '}
            </p>
            <cite>- Bill Gates</cite>
        </blockquote>
    ))
    .add('Lists', () => (
        <div>
            <ul>
                <li>list item 1</li>
                <li>
                    list item 2
                    <ul>
                        <li>list item 2.1</li>
                        <li>list item 2.2</li>
                        <li>list item 2.3</li>
                    </ul>
                </li>
                <li>list item 3</li>
            </ul>
            <ol>
                <li>list item 1</li>
                <li>
                    list item 2
                    <ol>
                        <li>list item 2.1</li>
                        <li>list item 2.2</li>
                        <li>list item 2.3</li>
                    </ol>
                </li>
                <li>list item 3</li>
            </ol>
            <dl>
                <dt>description list term 1</dt>
                <dd>description list description 1</dd>
                <dt>description list term 2</dt>
                <dd>description list description 2</dd>
                <dt>description list term 3</dt>
                <dd>description list description 3</dd>
            </dl>
        </div>
    ))
    .add('Tables', () => (
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>genre</th>
                    <th>release date</th>
                </tr>
            </thead>
            <tbody>
                <tr className="active">
                    <td>The Shawshank Redemption</td>
                    <td>Crime, Drama</td>
                    <td>14 October 1994</td>
                </tr>
                <tr className="active">
                    <td>The Shawshank Redemption</td>
                    <td>Crime, Drama</td>
                    <td>14 October 1994</td>
                </tr>
                <tr className="active">
                    <td>The Shawshank Redemption</td>
                    <td>Crime, Drama</td>
                    <td>14 October 1994</td>
                </tr>
            </tbody>
        </table>
    ));
storiesOf('Material HD', module)
    .add('base class', () => (
        <div style={{ padding: '10px' }} className="mhd-Base">
            <h1>
                H1 Heading <small>56px</small>
            </h1>
            <h2>
                H2 Heading <small>45px</small>
            </h2>
            <h3>
                H3 Heading <small>34px</small>
            </h3>
            <h4>
                H4 Heading <small>24px</small>
            </h4>
            <h5>
                H5 Heading <small>20px</small>
            </h5>
            <h6>
                H6 Heading <small>16px</small>
            </h6>
            <p>
                Lorem ipsum dolor sit amet, consectetur{' '}
                <a href="#typography">
                    adipiscing elit. Praesent risus leo, dictum in vehicula sit
                    amet
                </a>, feugiat tempus tellus. Duis quis sodales risus. Etiam
                euismod ornare consequat.
            </p>
            <p>
                Climb leg rub face on everything give attitude nap all day for
                under the bed. Chase mice attack feet but rub face on everything
                hopped up on goofballs.
            </p>
            <h4>Semantic text elements</h4>
            <div>
                <abbr title="Internationalization">I18N</abbr>
                <code>&lt;abbr&gt;</code>
            </div>
            <div>
                <strong>Bold</strong>
                <code>&lt;strong&gt;</code> <code>&lt;b&gt;</code>
            </div>
            <div>
                <cite>Citation</cite>
                <code>&lt;cite&gt;</code>
            </div>
            <div>
                <code>Hello World!</code>
                <code>&lt;code&gt;</code>
            </div>
            <div>
                <del>Deleted</del>
                <code>&lt;del&gt;</code>
            </div>
            <div>
                <em>Emphasis</em>
                <code>&lt;em&gt;</code>
            </div>
            <div>
                <i>Italic</i>
                <code>&lt;i&gt;</code>
            </div>
            <div>
                <ins>Inserted</ins>
                <code>&lt;ins&gt;</code>
            </div>
            <div>
                <kbd>Ctrl + S</kbd>
                <code>&lt;kbd&gt;</code>
            </div>
            <div>
                <mark>Highlighted</mark>
                <code>&lt;mark&gt;</code>
            </div>
            <div>
                <ruby>
                    漢 <rt>kan</rt>
                    字 <rt>ji</rt>
                </ruby>
                <code>&lt;ruby&gt;</code>
            </div>
            <div>
                <s>Strikethrough</s>
                <code>&lt;s&gt;</code>
            </div>
            <div>
                <samp>Sample</samp>
                <code>&lt;samp&gt;</code>
            </div>
            <div>
                Text <sub>Subscripted</sub>
                <code>&lt;sub&gt;</code>
            </div>
            <div>
                Text <sup>Superscripted</sup>
                <code>&lt;sup&gt;</code>
            </div>
            <div>
                <time>20:00</time>
                <code>&lt;time&gt;</code>
            </div>
            <div>
                <u>Underline</u>
                <code>&lt;u&gt;</code>
            </div>
            <div>
                <var>x</var> = <var>y</var> + 2
                <code>&lt;var&gt;</code>
            </div>
            <p>
                Climb leg rub <kbd>Ctrl + S</kbd> face on everything give
                attitude nap all day for under the bed. Chase mice attack feet
                but rub face on everything <mark>Highlighted</mark> hopped up on
                goofballs.
            </p>
            <blockquote>
                <p>
                    The advance of technology is based on making it fit in so
                    that you don't really even notice it, so it's part of
                    everyday life.{' '}
                </p>
                <cite>- Bill Gates</cite>
            </blockquote>
            <ul>
                <li>list item 1</li>
                <li>
                    list item 2
                    <ul>
                        <li>list item 2.1</li>
                        <li>list item 2.2</li>
                        <li>list item 2.3</li>
                    </ul>
                </li>
                <li>list item 3</li>
            </ul>
            <ol>
                <li>list item 1</li>
                <li>
                    list item 2
                    <ol>
                        <li>list item 2.1</li>
                        <li>list item 2.2</li>
                        <li>list item 2.3</li>
                    </ol>
                </li>
                <li>list item 3</li>
            </ol>
            <dl>
                <dt>description list term 1</dt>
                <dd>description list description 1</dd>
                <dt>description list term 2</dt>
                <dd>description list description 2</dd>
                <dt>description list term 3</dt>
                <dd>description list description 3</dd>
            </dl>
        </div>
    ))
    .add('with some emoji', () => (
        <button onClick={action('clicked')}>😀 😎 👍 💯</button>
    ));
